import { useCharacters } from "@/hooks/useCharacters";
import { useContext, useEffect, useState } from "react";
import { CardCharacter } from "./CardCharacter";
import { useSearchCharacters } from "@/hooks/useSearchCharacters";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Loader } from "lucide-react";
import { FilterCharacter } from "./FilterCharacter";
import { PaginationControl } from "./PaginationControl";

export function CharacterList() {
  const { searchCharacter, filterCharacter, curPage, setCurPage } =
    useContext(CharacterContext);

  const searchResult = useSearchCharacters(
    curPage,
    searchCharacter,
    filterCharacter
  );
  const characterResult = useCharacters(
    curPage,
    searchCharacter,
    filterCharacter
  );

  // qual resultado usar
  const { isFetching, data } = searchCharacter ? searchResult : characterResult;

  const totalPages = Math.ceil(data?.total / 8);

  console.log(data, totalPages);

  return (
    <>
      <FilterCharacter />
      {filterCharacter != 0 ? (
        <p className="text-white mt-1 text-[12px] sm:text-lg  font-semibold">
          Characters that appear in comic number: {filterCharacter}
        </p>
      ) : (
        ""
      )}

      <div className="mt-2 flex-1 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        {!isFetching ? (
          data.results.map((e: any) => {
            return (
              <CardCharacter
                key={e.id}
                id={e.id}
                name={e.name}
                description={e.description}
                imageIcon={`${e.thumbnail.path}.${e.thumbnail.extension}`}
              />
            );
          })
        ) : (
          <div className="flex-1 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 w-full   flex items-center justify-center ">
            {" "}
            <Loader className="animate-spin" color="#ffffff" />
          </div>
        )}
      </div>
      {!isFetching ? <PaginationControl totalPages={totalPages} /> : ""}
    </>
  );
}

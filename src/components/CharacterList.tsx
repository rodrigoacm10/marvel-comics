import { useCharacters } from "@/hooks/useCharacters";
import { useContext, useEffect, useState } from "react";
import { CardCharacter } from "./CardCharacter";
import { useSearchCharacters } from "@/hooks/useSearchCharacters";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Loader } from "lucide-react";
import { FilterCharacter } from "./FilterCharacter";

export function CharacterList() {
  const [curPage, setCurPage] = useState<number>(0);

  const { searchCharacter, filterCharacter } = useContext(CharacterContext);

  // hooks sem condicional
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

  const totalPages = Math.ceil(data?.total / data?.results.length);

  const correctNum = (num: number, type: "minus" | "plus") => {
    return type === "minus"
      ? num / data?.results.length - 1
      : num / data?.results.length + 1;
  };

  console.log(data, totalPages);

  return (
    <>
      <FilterCharacter />
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
            <Loader color="#ffffff" />
          </div>
        )}
      </div>
      <div className="flex justify-end gap-2  ">
        <button
          onClick={() => {
            if (curPage / 8 > 0) {
              setCurPage(curPage - 8);
            } else {
              setCurPage(totalPages);
            }
          }}
        >
          a
        </button>
        <button
          onClick={() => {
            setCurPage(
              correctNum(curPage, "minus") === -1
                ? 196
                : correctNum(curPage, "minus") * 8
            );
          }}
        >
          {correctNum(curPage, "minus") === -1
            ? totalPages
            : correctNum(curPage, "minus") + 1}
        </button>

        <button>{data.nextOffset / 8}</button>

        <button
          onClick={() => {
            setCurPage(
              correctNum(curPage, "plus") === totalPages + 1
                ? 0
                : correctNum(curPage, "plus") * 8
            );
          }}
        >
          {data.nextOffset === 204 ? 1 : correctNum(curPage, "plus") + 1}
        </button>

        <button
          onClick={() => {
            if (curPage / 8 < totalPages) {
              setCurPage(curPage + 8);
            } else {
              setCurPage(0);
            }
          }}
        >
          b
        </button>
      </div>
    </>
  );
}

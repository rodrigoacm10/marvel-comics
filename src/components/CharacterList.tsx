import { useCharacters } from "@/hooks/useCharacters";
import { useContext, useEffect, useState } from "react";
import { CardCharacter } from "./CardCharacter";
import { useSearchCharacters } from "@/hooks/useSearchCharacters";
import { CharacterContext } from "@/contexts/CharacterContext";

export function CharacterList() {
  const [curPage, setCurPage] = useState<number>(0);

  const { searchCharacter } = useContext(CharacterContext);

  // const corInfos = (search: string) => {
  //   if (search != "") {
  //     const { isFetching, data } = useSearchCharacters(
  //       curPage,
  //       searchCharacter
  //     );

  //     return {
  //       isFetching,
  //       data,
  //     };
  //   } else {
  //     const { isFetching, data } = useCharacters(curPage, searchCharacter);

  //     return {
  //       isFetching,
  //       data,
  //     };
  //   }
  // };

  // const { isFetching, data } = corInfos(searchCharacter);

  const { isFetching, data } = searchCharacter
    ? useSearchCharacters(curPage, searchCharacter)
    : useCharacters(curPage, searchCharacter);

  // const { isFetching, data } = useCharacters(curPage);
  // const { isFetching, data } = useSearchCharacters(curPage, searchCharacter);

  const totalPages = Math.ceil(data?.total / data?.results.length);

  const correctNum = (num: number, type: "minus" | "plus") => {
    return type === "minus"
      ? num / data?.results.length - 1
      : num / data?.results.length + 1;
  };

  console.log(data, totalPages);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.results ? (
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
          <p>nada encontrado</p>
        )}
      </div>
      <div className="flex justify-end gap-2 bg-marvel-red">
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

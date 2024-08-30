import { useCharacters } from "@/hooks/useCharacters";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DEFAULT_MAX_VERSION } from "tls";
import { CardCharacter } from "./CardCharacter";

export function CharacterList() {
  const [curPage, setCurPage] = useState<number>(0);

  const { data } = useCharacters(curPage);

  const totalPages = Math.ceil(data?.total / data?.results.length);

  const correctNum = (num: number, type: "minus" | "plus") => {
    return type === "minus"
      ? num / data?.results.length - 1
      : num / data?.results.length + 1;
  };

  console.log(data, totalPages);

  //   const getInfos = () => {
  //     console.log(data);
  //   };
  //   useEffect(() => {
  //     getInfos();
  //   });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.results ? (
          data.results.map((e: any) => {
            return (
              <CardCharacter
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

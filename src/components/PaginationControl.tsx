import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export function PaginationControl({ totalPages }: { totalPages: number }) {
  const { curPage, setCurPage } = useContext(CharacterContext);

  return (
    <div className="bg-marvel-red mt-3 flex justify-end gap-2  ">
      <button
        onClick={() => {
          if (curPage / 8 > 0) {
            setCurPage(curPage - 8);
          } else {
            setCurPage(totalPages * 8 - 8);
          }
        }}
      >
        <FaArrowLeft color="#ffffff" />
      </button>
      <button
        onClick={() => {
          //   setCurPage(
          //     correctNum(curPage, "minus") === -1
          //       ? 196
          //       : correctNum(curPage, "minus") * 8
          //   );
        }}
      >
        {/* {correctNum(curPage, "minus") === -1
          ? totalPages
          : correctNum(curPage, "minus") + 1} */}
      </button>

      <button>{/* {data.nextOffset / 8} */}</button>

      <button
        onClick={() => {
          //   setCurPage(
          //     correctNum(curPage, "plus") === totalPages + 1
          //       ? 0
          //       : correctNum(curPage, "plus") * 8
          //   );
        }}
      >
        {/* {data.nextOffset === 204 ? 1 : correctNum(curPage, "plus") + 1} */}
      </button>

      <button
        onClick={() => {
          if (curPage < 1560) {
            setCurPage(curPage + 8);
          } else {
            setCurPage(0);
          }
        }}
      >
        <FaArrowRight color="#ffffff" />
      </button>
    </div>
  );
}

import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export function PaginationControl({ totalPages }: { totalPages: number }) {
  const { curPage, setCurPage } = useContext(CharacterContext);
  console.log(curPage, totalPages);

  return (
    <div className="mt-3 flex justify-end gap-2  ">
      <div className="grid grid-cols-5 gap-1">
        <button
          className="flex hover:bg-primary-dark items-center justify-center bg-secondary-dark border-tertiary-dark border rounded-lg p-3 "
          onClick={() => {
            if (curPage / 8 > 0 && !isNaN(totalPages)) {
              setCurPage(curPage - 8);
            } else if (!isNaN(totalPages)) {
              setCurPage(totalPages * 8 - 8);
            } else {
              setCurPage(0);
            }
          }}
        >
          <FaArrowLeft color="#ffffff" />
        </button>
        {totalPages != 1 && !isNaN(totalPages) ? (
          <button
            className="  hover:bg-primary-dark flex items-center justify-center bg-secondary-dark text-white border-tertiary-dark border rounded-lg p-3 "
            onClick={() => {
              if (curPage != 0) {
                setCurPage(curPage - 8);
              } else {
                setCurPage(totalPages * 8 - 8);
              }
            }}
          >
            {curPage != 0 ? (curPage - 8) / 8 + 1 : totalPages}
          </button>
        ) : (
          <div></div>
        )}

        <button className="flex items-center justify-center   text-white  bg-primary-dark border-tertiary-dark border rounded-lg p-3 ">
          {curPage / 8 + 1}
        </button>

        {totalPages != 1 && !isNaN(totalPages) ? (
          <button
            className="flex items-center justify-center  text-white bg-secondary-dark hover:bg-primary-dark border-tertiary-dark border rounded-lg p-3 "
            onClick={() => {
              if (curPage / 8 < totalPages - 1) {
                setCurPage(curPage + 8);
              } else {
                setCurPage(0);
              }
            }}
          >
            {curPage / 8 < totalPages - 1 ? (curPage + 8) / 8 + 1 : 1}
          </button>
        ) : (
          <div></div>
        )}
        <button
          className="flex hover:bg-primary-dark items-center justify-center bg-secondary-dark border-tertiary-dark border rounded-lg p-3 "
          onClick={() => {
            if (curPage / 8 < totalPages - 1 && !isNaN(totalPages)) {
              setCurPage(curPage + 8);
            } else {
              setCurPage(0);
            }
          }}
        >
          <FaArrowRight color="#ffffff" />
        </button>
      </div>
    </div>
  );
}

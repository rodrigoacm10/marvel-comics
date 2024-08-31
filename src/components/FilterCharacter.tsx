import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useCallback, useContext, useRef, useState } from "react";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { useComics } from "@/hooks/useComics";
import { debounce } from "lodash";
import { Loader } from "lucide-react";

export function FilterCharacter() {
  const [searchComic, setSearchComic] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { filterCharacter, setFilterCharacter, setCurPage } =
    useContext(CharacterContext);

  const debouncedSearch = useCallback(
    debounce((value) => {
      console.log(value);
      if (value == "") {
        setFilterCharacter(0);
      }
      setSearchComic(value);
      setCurPage(0);
      setIsOpen(true);
    }, 500),
    []
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const { data, isFetching } = useComics(searchComic);
  console.log(data);

  return (
    <div className="flex flex-col gap-2 justify-end items-end">
      <p className="text-white text-xs  mr-[50px]">
        filter characters by comic:
      </p>
      <div className="relative">
        <Input
          ref={inputRef}
          id="filtInput"
          className="w-[200px] pl-10  text-white bg-secondary-dark"
          placeholder="search comic..."
          defaultValue={searchComic}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 150);
          }}
          onChange={handleChange}
        />
        <button className="absolute top-3 left-4">
          <FaSearch color="#ffffff" />
        </button>

        {searchComic != "" && isOpen === true ? (
          <label
            htmlFor="filtInput"
            className={`bg-secondary-dark border text-white p-2 truncate w-[200px] rounded absolute  top-12 left-0 flex flex-col`}
          >
            {isFetching ? (
              <div className="flex items-center justify-center">
                <Loader className="animate-spin" color="#ffffff" size={26} />
              </div>
            ) : (
              <></>
            )}

            {data.results.length == 0 && !isFetching ? <p>nothing</p> : <></>}

            {data.results.length != 0 && !isFetching ? (
              <>
                {" "}
                {data.results.map((e) => {
                  return (
                    <button
                      className="hover:bg-primary-dark rounded-md p-1 max-w-[180px] truncate"
                      key={e.id}
                      onClick={() => {
                        handleButtonClick();
                        console.log("a");
                        setFilterCharacter(e.id);
                      }}
                    >
                      {e.title}
                    </button>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </label>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

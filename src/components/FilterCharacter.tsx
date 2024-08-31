import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useContext } from "react";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";

export function FilterCharacter() {
  const { filterCharacter, setFilterCharacter } = useContext(CharacterContext);

  return (
    <div className="flex flex-col gap-2 justify-end items-end">
      <p className="text-white text-xs mr-3">filter characters by comic:</p>
      <div className="relative">
        <Input
          className="w-[160px] pl-10  text-white bg-secondary-dark"
          type="number"
          value={filterCharacter}
          onChange={(e) => {
            if (+e.target.value < 0) {
              return;
            }
            setFilterCharacter(+e.target.value);
          }}
        />
        <button className="absolute top-3 left-4">
          <FaSearch color="#ffffff" />
        </button>
      </div>
    </div>
  );
}

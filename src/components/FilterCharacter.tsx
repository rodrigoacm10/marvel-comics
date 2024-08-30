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

export function FilterCharacter() {
  const { filterCharacter, setFilterCharacter } = useContext(CharacterContext);

  return (
    <div className="flex flex-col gap-2 justify-end items-end">
      <p className="text-white text-xs mr-4">filter characters in comic:</p>
      <Input
        className="w-[160px]   text-white bg-secondary-dark"
        type="number"
        value={filterCharacter == 0 ? "" : filterCharacter}
        onChange={(e) => {
          if (+e.target.value < 0) {
            return;
          }
          setFilterCharacter(+e.target.value);
        }}
      />
    </div>
  );
}

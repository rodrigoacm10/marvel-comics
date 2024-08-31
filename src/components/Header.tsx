import IconMarvel from "./icons/IconMarvel";
import { FaSearch } from "react-icons/fa";
import { Input } from "./ui/input";
import { useCallback, useContext } from "react";
import { CharacterContext } from "@/contexts/CharacterContext";
import { debounce } from "lodash";

export function Header() {
  const { searchCharacter, setSearchCharacter, setCurPage } =
    useContext(CharacterContext);

  const handleSubmited = () => {
    setSearchCharacter(searchCharacter);
    // Aqui você faria a requisição para a API
  };

  // Debounce para aguardar 500ms após o usuário parar de digitar
  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchCharacter(value);
      setCurPage(0);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };
  return (
    <div className="bg-marvel-red py-3 grid grid-cols-3">
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2">
          <IconMarvel />
        </div>
      </div>
      <div className="flex col-span-2 sm:col-span-1 items-center justify-center relative pr-6 sm:pr-0">
        <Input
          // value={searchCharacter}
          // onChange={(e) => setSearchCharacter(e.target.value)}
          // onKeyDown={handleKeyDown}
          placeholder="procurar personagem..."
          defaultValue={searchCharacter}
          onChange={handleChange}
          className="pl-10 bg-marvel-red text-white"
        />
        <button className="absolute left-4" onClick={handleSubmited}>
          <FaSearch color="#ffffff" />
        </button>
      </div>
    </div>
  );
}

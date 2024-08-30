import IconMarvel from "./icons/IconMarvel";
import { Input } from "./ui/input";

export function Header() {
  const handleSubmited = () => {
    console.log("fooi");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita a submissão do formulário, se necessário
      handleSubmited();
    }
  };

  return (
    <div className="bg-marvel-red grid grid-cols-3">
      <IconMarvel />
      <div className="flex items-center justify-center relative">
        <Input
          onKeyDown={handleKeyDown}
          className="pl-10 bg-marvel-red text-white"
        />
        <button className="absolute left-4" onClick={handleSubmited}>
          a
        </button>
      </div>
    </div>
  );
}

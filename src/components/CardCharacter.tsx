import { useContext } from "react";
import { Card, CardContent } from "./ui/card";
import { CharacterContext } from "@/contexts/CharacterContext";

export function CardCharacter({
  id,
  name,
  description,
  imageIcon,
}: {
  id: number;
  name: string;
  description: string;
  imageIcon: string;
}) {
  const { setCharacterVisible, setCharacterId } = useContext(CharacterContext);

  return (
    <Card
      onClick={() => {
        setCharacterId(id);
        setCharacterVisible(true);
      }}
      key={id}
      className="border-quarternary-dark rounded-lg overflow-hidden bg-secondary-dark h-[350px] transition duration-300 hover:-translate-y-1  "
    >
      <img
        src={imageIcon}
        alt={name}
        width={300}
        height={400}
        className="rounded-t-lg object-cover w-full h-60"
        style={{ objectFit: "cover" }}
      />
      <CardContent className="bg-secondary-dark p-4 text-white">
        <h3 className="text-lg truncate font-semibold mb-2">{name}</h3>
        <p className="text-sm line-clamp-2 min-h-10  text-[#d5d2d1]">
          {description ? description : "no description reported"}
        </p>
      </CardContent>
    </Card>
  );
}

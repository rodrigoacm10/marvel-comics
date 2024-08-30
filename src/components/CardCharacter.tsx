import { Card, CardContent } from "./ui/card";

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
  return (
    <Card
      onClick={() => {
        console.log(id);
        console.log("clickou");
      }}
      key={id}
      className="border-quarternary-dark rounded-lg overflow-hidden bg-secondary-dark h-[350px] transition duration-300 hover:-translate-y-1 "
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
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm line-clamp-2 min-h-10  text-[#d5d2d1]">
          {description ? description : "nenhuma descrição relatada"}
        </p>
      </CardContent>
    </Card>
  );
}

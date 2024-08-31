import { useContext } from "react";
import { Card, CardContent } from "./ui/card";
import { IoMdClose } from "react-icons/io";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useOneCharacter } from "@/hooks/useOneCharacter";
import { Loader } from "lucide-react";

export function CharacterInfos() {
  const { setCharacterVisible, characterId, setCharacterId } =
    useContext(CharacterContext);

  const { data, isFetching } = useOneCharacter(characterId);
  console.log(data);

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="fixed  h-screen w-full top-0 left-0   opacity-2 z-40"
    >
      {/* pt-10 px-10 pt-8 px-1 */}
      <Card className="z-50 min-w-[300px] min-h-[350px] h-[80%] w-[70%]   fixed   rounded-[5px]  bg-secondary-dark  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 relative  ">
        {isFetching ? (
          <div className="flex items-center justify-center h-full">
            <Loader color="#ffffff" size={26} />
          </div>
        ) : (
          <div className="h-full  grid grid-rows-[40%_60%] md:grid-cols-2">
            {" "}
            <div className="h-full rounded-l-lg bg-tertiary-dark">
              <img
                src={`${data.results?.thumbnail?.path}.${data.results?.thumbnail?.extension}`}
                alt={data.results.name}
                width={300}
                // height={400}
                height={"100%"}
                className=" rounded-ss-lg object-cover w-full md:min-h-[350px] md:max-h-[1000px] h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <CardContent className="custombar-clean overflow-y-scroll md:overflow-visible h-full">
              <h2 className="text-white text-xl font-semibold mt-4">
                {data.results.name}
              </h2>
              <p className="text-white mt-4 text-sm">
                {" "}
                {data.results.description
                  ? data.results.description
                  : "Nenhuma descrição relatada"}
              </p>

              <div className="mt-6 text-white text-sm grid grid-cols-2 sm:grid-cols-3  gap-6">
                <div>
                  <h3>Comics</h3>
                  <span>{data.results.comics.available}</span>
                </div>
                <div>
                  <h3>Séries</h3>
                  <span>{data.results.series.available}</span>
                </div>

                <div>
                  <h3>Histórias</h3>
                  <span>{data.results.stories.available}</span>
                </div>
              </div>
            </CardContent>
          </div>
        )}

        <button
          onClick={() => {
            setCharacterId(0);
            setCharacterVisible(false);
          }}
          className="absolute top-2 right-2 "
        >
          <IoMdClose color="#ffffff" size={26} />
        </button>
      </Card>
    </div>
  );
}

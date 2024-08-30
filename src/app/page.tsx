"use client";

import { CardCharacter } from "@/components/CardCharacter";
import { CharacterList } from "@/components/CharacterList";
import { Header } from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
  const client = new QueryClient();

  // const getInfos = async () => {
  //   // const data = await fetchCharacters();
  //   // const data = await testReactQuery();
  //   // const data = await characterList(1);
  //   // const data = useCharacters(0);
  //   const data = useProducts();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getInfos();
  // }, []);

  return (
    <QueryClientProvider client={client}>
      <main className="min-h-screen bg-primary-dark">
        <Header />
        <div className="p-6">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
          <CharacterList />
          {/* </div> */}
        </div>
      </main>
    </QueryClientProvider>
  );
}

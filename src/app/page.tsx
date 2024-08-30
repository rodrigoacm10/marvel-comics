"use client";

import { CardCharacter } from "@/components/CardCharacter";
import { CharacterInfos } from "@/components/CharacterInfos";
import { CharacterList } from "@/components/CharacterList";
import { Header } from "@/components/Header";
import { CharacterContext } from "@/contexts/CharacterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext, useEffect } from "react";

export default function Home() {
  const client = new QueryClient();

  const { characterVisible } = useContext(CharacterContext);

  return (
    <QueryClientProvider client={client}>
      <main className="min-h-screen bg-primary-dark">
        <Header />
        <div className="p-6">
          <CharacterList />
        </div>

        {characterVisible ? <CharacterInfos /> : ""}
      </main>
    </QueryClientProvider>
  );
}

"use client";

import { createContext, ReactNode, useState } from "react";

export const CharacterContext = createContext({
  characterVisible: false,
  setCharacterVisible: (val: boolean) => {},
  characterId: 0,
  setCharacterId: (val: number) => {},
  searchCharacter: "",
  setSearchCharacter: (val: string) => {},
  filterCharacter: 0,
  setFilterCharacter: (val: number) => {},
});

interface CharacterContextProviderProps {
  children: ReactNode;
}

export function CharacterContextProvider({
  children,
}: CharacterContextProviderProps) {
  const [characterVisible, setCharacterVisible] = useState(false);
  const [characterId, setCharacterId] = useState(0);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [filterCharacter, setFilterCharacter] = useState(0);

  return (
    <CharacterContext.Provider
      value={{
        characterVisible,
        setCharacterVisible,
        characterId,
        setCharacterId,
        searchCharacter,
        setSearchCharacter,
        filterCharacter,
        setFilterCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

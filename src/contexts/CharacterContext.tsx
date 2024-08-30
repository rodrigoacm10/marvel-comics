"use client";

import { createContext, ReactNode, useState } from "react";

export const CharacterContext = createContext({
  characterVisible: false,
  setCharacterVisible: (val: boolean) => {},
  characterId: 0,
  setCharacterId: (val: number) => {},
  searchCharacter: "",
  setSearchCharacter: (val: string) => {},
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

  return (
    <CharacterContext.Provider
      value={{
        characterVisible,
        setCharacterVisible,
        characterId,
        setCharacterId,
        searchCharacter,
        setSearchCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

import { fetchOneCharacter } from "@/lib/fetchCharacters";
import { characterTypes } from "@/types/characterTypes";
import { useQuery } from "@tanstack/react-query";

export function useOneCharacter(id: number) {
  const { data, isFetching } = useQuery({
    queryFn: () => fetchOneCharacter(id),
    queryKey: ["character", id],
    // staleTime: 1000 * 60 * 1,
  });

  if (data) {
    return {
      isFetching,

      data: data,
    };
  } else {
    return {
      isFetching,

      data: {
        results: {} as characterTypes,
      },
    };
  }
}

import { fetchCharacters } from "@/lib/fetchCharacters";
import { useQuery } from "@tanstack/react-query";

export function useCharacters(curPage: number, id?: number) {
  const { data } = useQuery({
    queryFn: () => fetchCharacters(curPage),
    queryKey: ["products", curPage],
    staleTime: 1000 * 60 * 1,
  });

  if (data) {
    return {
      data: data,
    };
  } else {
    return {
      data: {
        total: 0,
        nextOffset: 0,
        results: [],
      },
    };
  }
}

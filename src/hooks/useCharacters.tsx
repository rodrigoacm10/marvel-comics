import { fetchCharacters } from "@/lib/fetchCharacters";
import { useQuery } from "@tanstack/react-query";

export function useCharacters(curPage: number, searchName: string) {
  const { data, isFetching } = useQuery({
    queryFn: () => fetchCharacters(curPage),
    queryKey: ["characters", curPage, searchName],
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
        total: 0,
        nextOffset: 0,
        results: [],
      },
    };
  }
}

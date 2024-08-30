import { fetchSearchCharacters } from "@/lib/fetchCharacters";
import { useQuery } from "@tanstack/react-query";

export function useSearchCharacters(curPage: number, searchName: string) {
  const { data, isFetching } = useQuery({
    queryFn: () => fetchSearchCharacters(curPage, searchName),
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

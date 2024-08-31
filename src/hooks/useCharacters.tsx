import { fetchCharacters } from "@/lib/fetchCharacters";
import { useQuery } from "@tanstack/react-query";

export function useCharacters(
  curPage: number,
  searchName: string,
  filter: number
) {
  const { data, isFetching } = useQuery({
    queryFn: () => fetchCharacters(curPage, filter),
    queryKey: ["characters", curPage, searchName, filter],
    staleTime: 1000 * 60 * 10,
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

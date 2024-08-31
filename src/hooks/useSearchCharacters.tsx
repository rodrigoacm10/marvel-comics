import { fetchSearchCharacters } from "@/lib/fetchCharacters";
import { useQuery } from "@tanstack/react-query";

export function useSearchCharacters(
  curPage: number,
  searchName: string,
  filter: number
) {
  const { data, isFetching } = useQuery({
    queryFn: () => fetchSearchCharacters(curPage, searchName, filter),
    queryKey: ["characters", curPage, searchName, filter],
    staleTime: 1000 * 60 * 10,
    enabled: searchName !== "",
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

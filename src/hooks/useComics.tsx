import { fetchComics } from "@/lib/fetchComics";
import { useQuery } from "@tanstack/react-query";

export function useComics(searchName: string) {
  const { data, isFetching } = useQuery({
    queryFn: () => fetchComics(searchName),
    queryKey: ["comics", searchName],
    staleTime: 1000 * 60 * 10,
    // enabled: searchName === "",
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
        results: [],
      },
    };
  }
}

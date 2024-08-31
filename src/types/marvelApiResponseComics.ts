import { Comic } from "./comicTypes";

export interface ComicsData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

export interface ComicsApiResponse {
  code: number;
  status: string;
  data: ComicsData;
}

import { ComicsApiResponse } from "@/types/marvelApiResponseComics";
import axios, { AxiosResponse } from "axios";

const limit = 10;
const publicKey = process.env.NEXT_PUBLIC_KEY as string;
const hash = process.env.NEXT_PUBLIC_HASH_KEY as string;

// faz a requisição para a API com o limite de comics
export const fetchComics = async (filter: string) => {
  const urlToPass = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}&titleStartsWith=${filter}&orderBy=-focDate&limit=${limit}`;

  const response: AxiosResponse<ComicsApiResponse> =
    await axios.get<ComicsApiResponse>(urlToPass);

  return {
    results: response.data.data.results,
  };
};

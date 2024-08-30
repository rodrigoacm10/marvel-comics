import { characterTypes } from "@/types/characterTypes";
import { MarvelAPIResponse } from "@/types/marvelApiResponse";
import axios, { AxiosResponse } from "axios";

// faz a requisição para a API com o limite de paginas
export const fetchCharacters = async (pageParam = 0) => {
  const limit = 8;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;
  const hash = process.env.NEXT_PUBLIC_HASH_KEY as string;

  // const response = await axios.get(
  //   `https://gateway.marvel.com/v1/public/characters?ts=1&limit=${limit}&apikey=${publicKey}&hash=${hash}`
  // );

  // &offset=0

  // console.log(await fetcher(), "aaaaa");

  const response: AxiosResponse<MarvelAPIResponse<characterTypes>> =
    await axios.get<MarvelAPIResponse<characterTypes>>(
      `https://gateway.marvel.com/v1/public/characters?ts=1&limit=${limit}&offset=${pageParam}&apikey=${publicKey}&hash=${hash}`
    );

  return {
    results: response.data.data.results,
    nextOffset: pageParam + limit,
    first: 1,
    total: response.data.data.total,
  };
};

export const fetchSearchCharacters = async (
  pageParam = 0,
  searchName: string
) => {
  const limit = 8;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;
  const hash = process.env.NEXT_PUBLIC_HASH_KEY as string;

  // const response = await axios.get(
  //   `https://gateway.marvel.com/v1/public/characters?ts=1&limit=${limit}&apikey=${publicKey}&hash=${hash}`
  // );

  // &offset=0

  // console.log(await fetcher(), "aaaaa");

  const response: AxiosResponse<MarvelAPIResponse<characterTypes>> =
    await axios.get<MarvelAPIResponse<characterTypes>>(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchName}&ts=1&limit=${limit}&offset=${pageParam}&apikey=${publicKey}&hash=${hash}`
    );

  return {
    results: response.data.data.results,
    nextOffset: pageParam + limit,
    first: 1,
    total: response.data.data.total,
  };
};

export const fetchOneCharacter = async (characterId: number) => {
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;
  const hash = process.env.NEXT_PUBLIC_HASH_KEY as string;

  // `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&offset=${pageParam}&apikey=${publicKey}&hash=${hash}`;

  // const response = await axios.get(
  //   `https://gateway.marvel.com/v1/public/characters?ts=1&limit=${limit}&offset=${pageParam}&apikey=${publicKey}&hash=${hash}`
  // );
  const response: AxiosResponse<MarvelAPIResponse<characterTypes>> =
    await axios.get<MarvelAPIResponse<characterTypes>>(
      `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${hash}`
    );

  console.log(response, "unico");

  return {
    results: response.data.data.results[0],
  };
};

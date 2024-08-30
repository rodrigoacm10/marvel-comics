import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

// faz a requisição para a API com o limite de paginas
export const fetchCharacters = async (pageParam = 0) => {
  const limit = 8;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;
  const hash = process.env.NEXT_PUBLIC_HASH_KEY as string;

  // const response = await axios.get(
  //   `https://gateway.marvel.com/v1/public/characters?ts=1&limit=${limit}&apikey=${publicKey}&hash=${hash}`
  // );

  // &offset=0

  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?ts=1&limit=${limit}&offset=${pageParam}&apikey=${publicKey}&hash=${hash}`
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
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${hash}`
  );

  return {
    results: response,
  };
};

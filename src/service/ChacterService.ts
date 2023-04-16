/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseData } from '../Types/Types';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    characters: builder.query<ResponseData, string>({
      query: (name) => ({
        url: `character/`,
        params: { 'name': name },
      }),
    }),
  }),
});

export const { useCharactersQuery } = characterApi;

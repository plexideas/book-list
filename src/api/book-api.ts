import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { FALLBACK_BOOKS_API_URL } from '../configs';
import { TBook, TBookResponse } from '../models';

const baseUrl = process.env.BOOKS_API_URL || FALLBACK_BOOKS_API_URL;

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: builder => ({
        getBooks: builder.query<TBook[], void>({
            query: () => '',
            transformResponse: (response: TBookResponse) => response.items.map(item => ({
                ...item,
                tags: Array.from(new Set(item.tags))
            }))
        })
    })
});

export const { useGetBooksQuery, useLazyGetBooksQuery } = booksApi;

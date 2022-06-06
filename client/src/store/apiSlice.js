import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
  // fetchBaseQuery to make request to server
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  // builder parameter to build query for GET request
  endpoints: builder => ({
    // GET categories
    getCategories: builder.query({
      // callback function to return endpoint for all categories of categories document
      query: () => './api/categories'
    }),

    //GET labels
    getLabels: builder.query({
      query: () => '/api/labels'
    }),

    // POST new transaction
    // mutation to create, update, or delete
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: '/api/transaction',
        method: "POST",
        body: initialTransaction
      })
    }),

    // DELETE transaction
    deleteTransaction: builder.mutation({
      query: recordId => ({
        url: '/api/transaction',
        method: "DELETE",
        body: recordId
      })
    })
  })
})


export default apiSlice;
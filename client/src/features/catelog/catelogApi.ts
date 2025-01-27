import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../app/models/products";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const catelogApi = createApi({
  reducerPath: "catelogApi",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://localhost:5001/api/",
  //   prepareHeaders: (headers) => {
  //     headers.set("Accept", "application/json");
  //     return headers;
  //   },
  // }),
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => ({ url: "products" }),
    }),
    fetchProductDetails: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    })
  })
});

export const { useFetchProductsQuery, useFetchProductDetailsQuery } = catelogApi;
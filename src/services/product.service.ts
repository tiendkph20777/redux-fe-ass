import { createApi, fetchBaseQuery, setupListeners } from "@reduxjs/toolkit/query/react"
import { Iproducts } from "../models"
import { store } from "../store"

export const productAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    tagTypes: ["product"],
    endpoints: builder => ({
        fetchProduct: builder.query<Iproducts[], void>({
            query: () => "/products",
            providesTags: ["product"]
        }),
        fetchOneProduct: builder.query<Iproducts, number>({
            query: (id) => `/products/${id}`, // Assuming the server endpoint for fetching a single product is like "/products/:id"
            providesTags: (result, error, id) => [{ type: "product", id }], // Provide a tag for the specific product ID
        }),
        removeProduct: builder.mutation({
            query: (id: number | string) => ({
                url: "/products/" + id,
                method: "DELETE"
            }),
            invalidatesTags: ["product"]
        }),
        addProduct: builder.mutation({
            query: (product: Iproducts) => ({
                url: "/products",
                method: "POST",
                body: product
            }),
        }),
        updateProduct: builder.mutation<Iproducts, Partial<Iproducts>>({
            query: (updatedProduct) => ({
                url: `/products/${updatedProduct.id}`, // Assuming the server endpoint for updating a product is like "/products/:id"
                method: "PUT",
                body: updatedProduct,
            }),
            invalidatesTags: (result, error, updatedProduct) => [{ type: "product", id: updatedProduct.id }], // Invalidate the cache for the updated product
        }),
    })
})

// setupListeners(store.dispatch)

export const { useFetchProductQuery, useRemoveProductMutation, useFetchOneProductQuery, useUpdateProductMutation } = productAPI


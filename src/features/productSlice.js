import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, ITEMS } from './../api/endpoints.js';  // Assuming PRODUCTS endpoint is defined in endpoints.js
import convertToFormData from './../utils/convertToFormData.js';
import getCookie from './../utils/getCookie.js';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + ITEMS,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
        }),
        getProductByType: builder.query({
            query: ({ pageNumber, pageSize, branch, productType }) => ({
                url: `/GetAllByType?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}&Warehouse=${branch}&Type=${productType}`,
            }),
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/GetById?ProductId=${id}`,
            }),
        })

    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetProductByTypeQuery,
} = productsApi;
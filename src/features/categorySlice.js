import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, CATEGORIES } from './../api/endpoints.js';
import convertToFormData from './../utils/convertToFormData.js';
import getCookie from './../utils/getCookie.js';

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + CATEGORIES,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrentCategoryKey: builder.query({
            query: () => ({
                url: '/GetCurrentKey',
            }),
            transformResponse: (response) => response.Response
        }),
        getCategories: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
            keepUnusedDataFor: 1800,
            transformResponse: (response) => response.Response
        }),
        getCategoryById: builder.query({
            query: (id) => ({
                url: `/GetById?CategoryId=${id}`,
            }),
            transformResponse: (response) => response.Response
        }),
        addCategory: builder.mutation({
            query: (category) => ({
                url: '/Insert',
                method: 'POST',
                body: convertToFormData(category),
            }),
        }),
        updateCategory: builder.mutation({
            query: (category) => ({
                url: '/Update',
                method: 'POST',
                body: convertToFormData(category),
            }),
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/Delete?CategoryId=${id}`,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useGetCurrentCategoryKeyQuery,
    useGetCategoriesQuery,
    useGetCategoryByIdQuery,
    useAddCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categoriesApi;

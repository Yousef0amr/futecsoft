import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, TAXES } from './../api/endpoints.js'; // Update this constant as needed
import convertToFormData from './../utils/convertToFormData.js';
import getCookie from './../utils/getCookie.js';

export const taxesApi = createApi({
    reducerPath: 'taxesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + TAXES,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrentTaxKey: builder.query({
            query: () => ({
                url: '/GetCurrentKey',
            }),
            transformResponse: (response) => response.Response
        }),
        getTaxes: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
            transformResponse: (response) => response.Response
        }),
        getTaxById: builder.query({
            query: (id) => ({
                url: `/GetById?TaxId=${id}`,
            }),
            transformResponse: (response) => response.Response
        }),
        addTax: builder.mutation({
            query: (tax) => ({
                url: '/Insert',
                method: 'POST',
                body: convertToFormData(tax),
            }),
        }),
        updateTax: builder.mutation({
            query: (tax) => ({
                url: '/Update',
                method: 'POST',
                body: convertToFormData(tax),
            }),
        }),
        deleteTax: builder.mutation({
            query: (id) => ({
                url: `/Delete?TaxId=${id}`,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useGetCurrentTaxKeyQuery,
    useGetTaxesQuery,
    useGetTaxByIdQuery,
    useAddTaxMutation,
    useUpdateTaxMutation,
    useDeleteTaxMutation,
} = taxesApi;

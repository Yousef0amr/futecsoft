import createDynamicApi from './../utils/generateApiSlice.js';
import { BASEURL, INVOICES } from './../api/endpoints.js';
import { longCacheTime } from '../config/constants.js';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getCookie from '../utils/getCookie.js';
import convertToFormData from '../utils/convertToFormData.js';

const transformData = (data) => ({
    ...data,
});


export const invoicesApi = createDynamicApi({
    reducerPath: 'invoicesApi',
    baseEndpoint: BASEURL + INVOICES
});

export const invoiceDetailsApi = createApi({
    reducerPath: 'invoiceDetailsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + INVOICES,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAllInvoiceDetails: builder.query({
            query: ({ id }) => ({
                url: `/GetDatailsByDocIDAll?DocID=${id}`,
            }),
            keepUnusedDataFor: longCacheTime,
            transformResponse: (response) => response.Response || response,
        }),
        updateInvoiceDetails: builder.mutation({
            query: (data) => ({
                url: '/UpdateWithDetails',
                method: 'POST',
                body: convertToFormData(data),
            }),
        }),
        deleteInvoiceDetails: builder.mutation({
            query: (data) => ({
                url: '/DeleteVoucherDtl',
                method: 'POST',
                body: convertToFormData(data),
            }),
        }),
    }),
})


export const {
    useGetCurrentKeyQuery: useGetCurrentInvoiceKeyQuery,
    useGetAllQuery: useGetInvoicesQuery,
    useAddMutation: useAddInvoiceMutation,
    useUpdateMutation: useUpdateInvoiceMutation,
    useDeleteMutation: useDeleteInvoiceMutation,
} = invoicesApi;


export const {
    useGetAllInvoiceDetailsQuery,
    useUpdateInvoiceDetailsMutation,
    useDeleteInvoiceDetailsMutation
} = invoiceDetailsApi;

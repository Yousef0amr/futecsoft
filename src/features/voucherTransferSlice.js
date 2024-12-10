import createDynamicApi from './../utils/generateApiSlice.js';
import { BASEURL, VOUCHER_TRANSFER } from './../api/endpoints.js';
import { longCacheTime } from '../config/constants.js';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getCookie from '../utils/getCookie.js';
import convertToFormData from '../utils/convertToFormData.js';

const transformData = (data) => ({
    ...data,
});


export const voucherTransferApi = createDynamicApi({
    reducerPath: 'voucherTransferApi',
    baseEndpoint: BASEURL + VOUCHER_TRANSFER
});

export const voucherTransferDetailsApi = createApi({
    reducerPath: 'voucherTransferDetailsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + VOUCHER_TRANSFER,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAllVoucherTransferDetails: builder.query({
            query: ({ id }) => ({
                url: `/GetDatailsByDocIDAll?DocID=${id}`,
            }),
            keepUnusedDataFor: longCacheTime,
            transformResponse: (response) => response.Response || response,
        }),
        updateVoucherTransferDetails: builder.mutation({
            query: (data) => ({
                url: '/UpdateWithDetails',
                method: 'POST',
                body: convertToFormData(data),
            }),
        }),
        deleteVoucherTransferDetails: builder.mutation({
            query: (data) => ({
                url: '/DeleteVoucherDtl',
                method: 'POST',
                body: convertToFormData(data),
            }),
        }),
    }),
})


export const {
    useGetCurrentKeyQuery: useGetCurrentVoucherTransferKeyQuery,
    useGetAllQuery: useGetVoucherTransfersQuery,
    useAddMutation: useAddVoucherTransferMutation,
    useUpdateMutation: useUpdateVoucherTransferMutation,
    useDeleteMutation: useDeleteVoucherTransferMutation
} = voucherTransferApi;


export const {
    useGetAllVoucherTransferDetailsQuery,
    useUpdateVoucherTransferDetailsMutation,
    useDeleteVoucherTransferDetailsMutation
} = voucherTransferDetailsApi;

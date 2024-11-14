import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, UNITS } from './../api/endpoints.js'; // Update this constant as needed
import convertToFormData from './../utils/convertToFormData.js';
import getCookie from './../utils/getCookie.js';

export const unitsApi = createApi({
    reducerPath: 'unitsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + UNITS,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrentUnitKey: builder.query({
            query: () => ({
                url: '/GetCurrentKey',
            }),
            transformResponse: (response) => response.Response
        }),
        getUnits: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
            transformResponse: (response) => response.Response
        }),
        getUnitById: builder.query({
            query: (id) => ({
                url: `/GetById?UnitId=${id}`,
            }),
            transformResponse: (response) => response.Response
        }),
        addUnit: builder.mutation({
            query: (unit) => ({
                url: '/Insert',
                method: 'POST',
                body: convertToFormData(unit),
            }),
        }),
        updateUnit: builder.mutation({
            query: (unit) => ({
                url: '/Update',
                method: 'POST',
                body: convertToFormData(unit),
            }),
        }),
        deleteUnit: builder.mutation({
            query: (id) => ({
                url: `/Delete?UnitId=${id}`,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useGetCurrentUnitKeyQuery,
    useGetUnitsQuery,
    useGetUnitByIdQuery,
    useAddUnitMutation,
    useUpdateUnitMutation,
    useDeleteUnitMutation,
} = unitsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, UNITS } from './../api/endpoints.js'; // Update this constant as needed
import convertToFormData from './../utils/convertToFormData.js';
import getCookie from './../utils/getCookie.js';
import { longCacheTime } from '../utils/constants.js';



const transformUnitData = (data) => {
    return {
        UnitID: data.UnitId,
        Unit_AR: data.UnitAr,
        Unit_EN: data.UnitEn,
        Active: data.Active,
    };
};


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
            providesTags: ['Unit_id'],
            transformResponse: (response) => response.Response
        }),
        getUnits: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
            keepUnusedDataFor: longCacheTime,
            transformResponse: (response) => {
                const data = response.Response || response;
                if (Array.isArray(data)) {
                    return data.map(item => transformUnitData(item));
                } else {
                    return [];
                }
            },
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
            onQueryStarted: async (unit, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.Success) {
                        dispatch(unitsApi.util.invalidateTags(['Unit_id']));
                    }
                } catch (error) {
                    return error
                }
            }
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
                url: `/Delete`,
                method: 'POST',
                body: convertToFormData(id),
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

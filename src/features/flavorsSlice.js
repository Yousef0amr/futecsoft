import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, FLAVORS } from './../api/endpoints.js';
import convertToFormData from './../utils/convertToFormData.js';
import getCookie from './../utils/getCookie.js';
import { longCacheTime } from '../utils/constants.js';

const transformFlavorData = (data) => {
    return {
        WareHouse: data.Warehouse,
        FlavorAR: data.FlavorAr,
        FlavorEN: data.FlavorEn,
        ...data
    };
};

export const flavorsApi = createApi({
    reducerPath: 'flavorsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + FLAVORS,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrentFlavorKey: builder.query({
            query: () => ({
                url: '/GetCurrentKey',
            }),
            providesTags: ['Flavor_id'],
            transformResponse: (response) => response.Response
        }),
        getFlavors: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
            keepUnusedDataFor: longCacheTime,
            transformResponse: (response) => {
                const data = response.Response || response;
                if (Array.isArray(data)) {
                    return data.map(item => transformFlavorData(item));
                } else {
                    return [];
                }
            },
        }),
        getFlavorById: builder.query({
            query: (id) => ({
                url: `/GetById?FlavorNo=${id}`,
            }),
            transformResponse: (response) => response.Response
        }),
        addFlavor: builder.mutation({
            query: (flavor) => ({
                url: '/Insert',
                method: 'POST',
                body: convertToFormData(flavor),
            }),
            onQueryStarted: async (flavor, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.Success) {
                        dispatch(flavorsApi.util.invalidateTags(['Flavor_id']));
                    }
                } catch (error) {
                    return error;
                }
            }
        }),
        updateFlavor: builder.mutation({
            query: (flavor) => ({
                url: '/Update',
                method: 'POST',
                body: convertToFormData(flavor),
            }),
        }),
        deleteFlavor: builder.mutation({
            query: (id) => ({
                url: `/Delete`,
                method: 'POST',
                body: convertToFormData(id),
            }),
        }),
    }),
});

export const {
    useGetCurrentFlavorKeyQuery,
    useGetFlavorsQuery,
    useGetFlavorByIdQuery,
    useAddFlavorMutation,
    useUpdateFlavorMutation,
    useDeleteFlavorMutation,
} = flavorsApi;

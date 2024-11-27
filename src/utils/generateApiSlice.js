import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import convertToFormData from './../utils/convertToFormData.js';
import getCookie from './../utils/getCookie.js';
import { longCacheTime } from '../utils/constants.js';


const createDynamicApi = ({ reducerPath, baseEndpoint, transformData }) => {
    const api = createApi({
        reducerPath,
        baseQuery: fetchBaseQuery({
            baseUrl: baseEndpoint,
            prepareHeaders: (headers) => {
                headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getCurrentKey: builder.query({
                query: () => ({
                    url: '/GetCurrentKey',
                }),
                providesTags: [`${reducerPath}_id`],
                transformResponse: (response) => response.Response,
            }),
            getAll: builder.query({
                query: ({ pageNumber, pageSize }) => ({
                    url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
                }),
                keepUnusedDataFor: longCacheTime,
                transformResponse: (response) => {
                    const data = response.Response || response;
                    if (Array.isArray(data)) {
                        return data.map(item => (transformData ? transformData(item) : item));
                    } else {
                        return [];
                    }
                },
            }),
            add: builder.mutation({
                query: (data) => ({
                    url: '/Insert',
                    method: 'POST',
                    body: convertToFormData(data),
                }),
                onQueryStarted: async (data, { dispatch, queryFulfilled }) => {
                    try {
                        const { data: responseData } = await queryFulfilled;
                        if (responseData?.Success) {
                            dispatch(api.util.invalidateTags([`${reducerPath}_id`]));
                        }
                    } catch (error) {
                        return error;
                    }
                },
            }),
            update: builder.mutation({
                query: (data) => ({
                    url: '/Update',
                    method: 'POST',
                    body: convertToFormData(data),
                }),
            }),
            delete: builder.mutation({
                query: (id) => ({
                    url: '/Delete',
                    method: 'POST',
                    body: convertToFormData(id),
                }),
            }),
        }),
    });

    return api;
};



export default createDynamicApi
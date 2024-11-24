import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, BRANCHES } from './../api/endpoints.js';
import convertToFormData from './../utils/convertToFormData.js'
import getCookie from './../utils/getCookie.js'
import { longCacheTime } from '../utils/constants.js';


export const branchesApi = createApi({
    reducerPath: 'branchesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + BRANCHES,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrentkey: builder.query({
            query: () => ({
                url: '/GetCurrentKey',
            }),
            transformResponse: (response) => response.Response,
            providesTags: ['Branch_id']
        }),
        getBranches: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
            keepUnusedDataFor: longCacheTime,
            transformResponse: (response) => response.Response
        }),

        getBranchesById: builder.query({
            query: (id) => ({
                url: `/GetById?BranchId =${id}`,
            }),
            transformResponse: (response) => response.Response
        }),
        addBranch: builder.mutation({
            query: (branch) => ({
                url: '/Insert',
                method: 'POST',
                body: convertToFormData(branch),
            }),
            onQueryStarted: async (branch, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.Success) {
                        dispatch(branchesApi.util.invalidateTags(['Brand_id']));
                    }
                } catch (error) {
                    return error
                }
            },
        }),
        UpdateBranch: builder.mutation({
            query: (branch) => ({
                url: '/Update',
                method: 'POST',
                body: convertToFormData(branch),
            }),
        }),
        deleteBranch: builder.mutation({
            query: (id) => ({
                url: `/Delete?BranchId=${id}`,
                method: 'POST',
            }),
        }),
    }),
});

export const { useGetCurrentkeyQuery, useGetBranchesQuery, useGetBranchesByIdQuery, useAddBranchMutation, useUpdateBranchMutation, useDeleteBranchMutation } = branchesApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, BRANCHES } from './../api/endpoints.js';
import convertToFormData from './../utils/convertToFormData.js'
import getCookie from './../utils/getCookie.js'


export const branchesApi = createApi({
    reducerPath: 'branchesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + BRANCHES,
        // credentials: 'include',
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
        }),
        getBranches: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAll?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
        }),
        getBranchesById: builder.query({
            query: (id) => ({
                url: `/GetById?BranchId =${id}`,
            }),
        }),
        addBranch: builder.mutation({
            query: (branch) => ({
                url: '/Insert',
                method: 'POST',
                body: convertToFormData(branch),
            }),
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

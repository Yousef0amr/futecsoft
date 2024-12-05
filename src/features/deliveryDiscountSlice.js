import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASEURL, DELIVERY_COMPANY } from "../api/endpoints";
import convertToFormData from "../utils/convertToFormData";
import getCookie from "../utils/getCookie";
import { longCacheTime } from "../utils/constants";


const transformData = (data) => ({
    ...data,
    CompanyID: data.CompanyId,
    LineID: data.LineId
});



export const deliveryDiscountApi = createApi({
    reducerPath: 'deliveryDiscountApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + DELIVERY_COMPANY,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCurrentKey: builder.query({
            query: () => ({
                url: '/GetDeliveryDiscountCurrentKey',
            }),
            providesTags: [`deliveryDiscount_id`],
            transformResponse: (response) => response.Response,
        }),
        getAll: builder.query({
            query: ({ pageNumber, pageSize }) => ({
                url: `/GetAllDeliveryDiscount?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}`,
            }),
            keepUnusedDataFor: longCacheTime,
            transformResponse: (response) => {
                const data = response.Response || response;
                if (Array.isArray(data)) {
                    return data.map(item => transformData(item));
                } else {
                    return [];
                }
            },
        }),
        add: builder.mutation({
            query: (data) => ({
                url: '/InsertDeliveryDiscount',
                method: 'POST',
                body: convertToFormData(data),
            }),
            onQueryStarted: async (data, { dispatch, queryFulfilled }) => {
                try {
                    const { data: responseData } = await queryFulfilled;
                    if (responseData?.Success) {
                        dispatch(deliveryDiscountApi.util.invalidateTags([`deliveryDiscount_id`]));
                    }
                } catch (error) {
                    return error;
                }
            },
        }),
        update: builder.mutation({
            query: (data) => ({
                url: '/UpdateDeliveryDiscount',
                method: 'POST',
                body: convertToFormData(data),
            }),
        }),
        delete: builder.mutation({
            query: (id) => ({
                url: '/DeleteDeliveryDiscount',
                method: 'POST',
                body: convertToFormData(id),
            }),
        }),
    }),
})



export const { useGetCurrentKeyQuery, useGetAllQuery, useAddMutation, useUpdateMutation, useDeleteMutation } = deliveryDiscountApi;

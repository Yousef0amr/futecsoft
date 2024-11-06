import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, PROFILE } from './../api/endpoints.js';
import convertToFormData from './../utils/convertToFormData.js'
import getCookie from './../utils/getCookie.js'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + PROFILE,
        // credentials: 'include',
        // prepareHeaders: (headers) => {
        //     headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
        //     return headers;
        // },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userCredentials) => ({
                url: '/Login',
                method: 'POST',
                body: convertToFormData(userCredentials),
            })
        }),
        logout: builder.mutation({

            query: () => ({
                url: '/Logout',
                method: 'POST',
            })
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, ITEMS } from './../api/endpoints.js';  // Assuming PRODUCTS endpoint is defined in endpoints.js
import convertToFormData from './../utils/convertToFormData.js';
import getCookie from './../utils/getCookie.js';
import { longCacheTime, shortCacheTime } from '../utils/constants.js';


const transformProductData = (data) => {
    return {
        Id: data.ProID,
        NameAr: data.Pro_AR_Name,
        NameEn: data.Pro_EN_Name,
        Father: data.CategoryAr,
        CatID: data.CatID,
        Tag: data.Tag,
        Question1: data.Question1,
        Question2: data.Question2,
        Question3: data.Question3,
        Question4: data.Question4,
        Question5: data.Question5,
        Compo: data.Compo,
        ForeColor: data.ForeColor,
        BackColor: data.BackColor,
        PreparationTime: data.PreparationTime,
        ImgPath: data.ImgPath,
        Printer: data.Printer,
        Printer2: data.Printer2,
        Barcode: data.Barcode,
        Price: data.Price,
        Price2: data.Price2,
        Price3: data.Price3,
        Price4: data.Price4,
        Warehouse: data.TagDesc,
        UnitID: data.UnitID,
        TaxPercentage: data.TaxPercentage,
        Discountable: data.Discountable,
        IsService: data.IsService,
        IsActive: data.IsActive,
        Saleable: data.Saleable,
        Taxable: data.Taxable,
        Icon: data.Icon
    };
};

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + ITEMS,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrentProductkey: builder.query({
            query: (categoryId) => ({
                url: `/GetCurrentKey?fatherId=${categoryId}`
            }),
            transformResponse: (response) => response.Response,
            providesTags: ['Product']
        }),
        getProductByType: builder.query({
            query: ({ pageNumber, pageSize, branch, productType }) => ({
                url: `/GetAllByType?paging.PageNumber=${pageNumber}&paging.PageSize=${pageSize}&Warehouse=${branch}&Type=${productType}`,
            }),
            keepUnusedDataFor: longCacheTime,
            transformResponse: (response) => {
                const data = response.Response || response;
                if (Array.isArray(data)) {
                    return data.map(item => transformProductData(item));
                } else {
                    return [];
                }
            },
            providesTags: ['Product_list']
        }),
        getCompositeComponentsById: builder.query({
            query: (id) => ({
                url: `/AppGetItemRecipeById?Id=${id}`,
            }),
            keepUnusedDataFor: longCacheTime,
            transformResponse: (response) => response.Response,
            providesTags: ['Components']
        }),
        getProductsByCategory: builder.query({
            query: (id) => ({
                url: `/ApiGetByCategory?FatherID=${id}`,
            }),
            keepUnusedDataFor: shortCacheTime,
            transformResponse: (response) => response.Response
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/GetById?ProductId=${id}`,
            }),
        }),
        addProduct: builder.mutation({
            query: ({ type, product }) => ({
                url: `/Insert${type}`,
                method: 'POST',
                body: convertToFormData(product),
            }),
            invalidatesTags: ['Product'],

        }),
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/Update`,
                method: 'POST',
                body: convertToFormData(product),
            }),
            invalidatesTags: ['Product_list'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/Delete`,
                method: 'POST',
                body: convertToFormData({ Id: id }),
            }),
        }),
        addComponent: builder.mutation(
            {
                query: (component) => ({
                    url: `/InsertRecipe`,
                    method: 'POST',
                    body: convertToFormData(component),
                }),
                invalidatesTags: ['Components']
            }
        ),
        updateComponent: builder.mutation({
            query: (component) => ({
                url: `/UpdateItemRecipe`,
                method: 'POST',
                body: convertToFormData(component),
            }),
            invalidatesTags: ['Components']
        }),
        deleteComponent: builder.mutation({
            query: ({ ItemID, SubItem }) => ({
                url: `/DeleteItemRecipe`,
                method: 'POST',
                body: convertToFormData({ ItemID, SubItem }),
            }),
            invalidatesTags: ['Components']
        }),
        getProductUnitsById: builder.query({
            query: (id) => ({
                url: `/ApiGetItemUnits?Id=${id}`,
            }),
            transformResponse: (response) => response.Response
        }),
        getProductsCost: builder.query({
            query: ({ CatID, Warehouse }) => ({
                url: `/GetItemsCost?CateID=${CatID}&Warehouse=${Warehouse}`,
            }),
            transformResponse: (response) => response.Response
        }),
        getProductsCosts: builder.query({
            query: ({ CateID, Warehouse }) => ({
                url: `/GetItemsCost?CateID=${CateID}&Warehouse=${Warehouse}`,
            }),
            transformResponse: (response) => response.Response
        })

    }),
});

export const {
    useLazyGetCurrentProductkeyQuery,
    useGetProductByIdQuery,
    useGetProductByTypeQuery,
    useAddProductMutation,
    useGetCurrentProductkeyQuery,
    useDeleteProductMutation,
    useAddComponentMutation,
    useGetProductsByCategoryQuery,
    useGetCompositeComponentsByIdQuery,
    useLazyGetProductsCostsQuery,
    useUpdateProductMutation,
    useGetProductUnitsByIdQuery,

    useUpdateComponentMutation,
    useDeleteComponentMutation
} = productsApi;

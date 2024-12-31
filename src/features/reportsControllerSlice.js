import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL, REPORTS_CONTROLLER } from "../api/endpoints";
import getCookie from "../utils/getCookie";

const transformBestItemsData = (data) => {
    return {
        asset: data.Ar_Name,
        amount: data.GrandTotal
    }
}

const transformBestCategoriesData = (data) => {
    return {
        asset: data.CateName,
        amount: data.GrandTotal
    }
}

export const reportsApi = createApi({
    reducerPath: 'reportsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL + REPORTS_CONTROLLER,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${getCookie('accessToken')}`);
            return headers
        }


    }),
    endpoints: (builder) => ({

        getFullSales: builder.query({
            query: ({ from_date, to_date }) =>
                `/GetFullSales?FromDate=${from_date}&ToDate=${to_date}`,
        }),
        getSalesCategory: builder.query({
            query: ({ FromDate, ToDate, Warehouse }) =>
                `/GetSalesCategory?FromDate=${FromDate}&ToDate=${ToDate}&Warehouse=${Warehouse}&FatherID=1`,
            transformResponse: (response) => response.Response || response,
        }),
        getSalesItems: builder.query({
            query: ({ from_date, to_date }) =>
                `/GetSalesItems?FromDate=${from_date}&ToDate=${to_date}`,
        }),
        getSalesByCashier: builder.query({
            query: ({ from_date, to_date, station, warehouse, cashier_no, pay_type }) =>
                `/GetSalesByCashier?FromDate=${from_date}&ToDate=${to_date}&StationID=${station}&Warehouse=${warehouse}&CashierNo=${cashier_no}&PayType=${pay_type}`,
        }),
        getBestSellerItems: builder.query({
            query: ({ from_date, to_date, warehouse }) => `/BestSellerItems?FromDate=${from_date}&ToDate=${to_date}&Warehouse=${warehouse}`,
            transformResponse: (response) => {
                const data = response.Response || response;
                if (Array.isArray(data)) {
                    return data.map(item => transformBestItemsData(item));
                } else {
                    return [];
                }
            }
        }),
        getBestSellerCategory: builder.query({
            query: ({ from_date, to_date, warehouse }) => `/BestSellerCategory?FromDate=${from_date}&ToDate=${to_date}&Warehouse=${warehouse}`,
            transformResponse: (response) => {
                const data = response.Response || response;
                if (Array.isArray(data)) {
                    return data.map(item => transformBestCategoriesData(item));
                } else {
                    return [];
                }
            }
        }),
        getSalesByDays: builder.query({
            query: ({ from_date, to_date, warehouse }) =>
                `/SalesByDays?FromDate=${from_date}&ToDate=${to_date}&Warehouse=${warehouse}`,
            transformResponse: (response) => response.Response || response,
        }),
        getSalesByHours: builder.query({
            query: ({ from_date, to_date, warehouse }) =>
                `/SalesByHours?FromDate=${from_date}&ToDate=${to_date}&Warehouse=${warehouse}`,
            transformResponse: (response) => response.Response || response,
        }),
        getSalesmanSales: builder.query({
            query: ({ from_date, to_date, salesman_id }) =>
                `/SalesmanSales?FromDate=${from_date}&ToDate=${to_date}&SalesmanID=${salesman_id}`,
        }),
        getReturnByInvoices: builder.query({
            query: ({ invoice_id }) =>
                `/ReturnByInvoices?InvoiceID=${invoice_id}`,
        }),
        getReturnByItems: builder.query({
            query: ({ item_id }) =>
                `/ReturnByItems?ItemID=${item_id}`,
        }),
        getInvoicesByDate: builder.query({
            transformResponse: (response) => response.Response || response,
            query: ({ FromDate, ToDate, Warehouse }) => `/InvoicesByDate?FromDate=${FromDate}&ToDate=${ToDate}&Warehouse=${Warehouse}&FatherID=1`,
        }),
        getItemTransaction: builder.query({
            query: ({ item_id }) =>
                `/ItemTransaction?ItemID=${item_id}`,
        }),
        getInventoryStatement: builder.query({
            query: ({ warehouse_id }) =>
                `/InventoryStatement?WarehouseID=${warehouse_id}`,
        }),
        getDailyProfit: builder.query({
            query: ({ date }) =>
                `/GetDailyProfit?Date=${date}`,
        }),
        getItemsProfits: builder.query({
            query: ({ from_date, to_date, item_id }) =>
                `/ItemsProfits?FromDate=${from_date}&ToDate=${to_date}&ItemID=${item_id}`,
        }),
        getItemSalesTransaction: builder.query({
            query: ({ from_date, to_date, item_id }) =>
                `/GetItemsSalesTransaction?FromDate=${from_date}&ToDate=${to_date}&ItemID=${item_id}`,
        }),
    }),
});

export const {
    useLazyGetBestSellerCategoryQuery,
    useLazyGetBestSellerItemsQuery,
    useLazyGetDailyProfitQuery,
    useLazyGetFullSalesQuery,
    useLazyGetInvoicesByDateQuery,
    useLazyGetInventoryStatementQuery,
    useLazyGetItemTransactionQuery,
    useLazyGetItemsProfitsQuery,
    useLazyGetReturnByInvoicesQuery,
    useLazyGetReturnByItemsQuery,
    useLazyGetSalesByCashierQuery,
    useLazyGetSalesByDaysQuery,
    useLazyGetSalesCategoryQuery,
    useLazyGetSalesItemsQuery,
    useLazyGetSalesmanSalesQuery,
    useGetBestSellerItemsQuery,
    useGetBestSellerCategoryQuery,
    useGetSalesByDaysQuery,
    useGetSalesByHoursQuery,
} = reportsApi;

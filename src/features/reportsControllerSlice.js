import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, REPORTS_CONTROLLER } from "../api/endpoints";

export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + REPORTS_CONTROLLER }),
    endpoints: (builder) => ({
        getFullSales: builder.query({
            query: ({ from_date, to_date }) =>
                `/GetFullSales?FromDate=${from_date}&ToDate=${to_date}`,
        }),
        getSalesCategory: builder.query({
            query: ({ from_date, to_date }) =>
                `/GetSalesCategory?FromDate=${from_date}&ToDate=${to_date}`,
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
            query: () => `/BestSellerItems`,
        }),
        getBestSellerCategory: builder.query({
            query: () => `/BestSellerCategory`,
        }),
        getSalesByDays: builder.query({
            query: ({ from_date, to_date }) =>
                `/SalesByDays?FromDate=${from_date}&ToDate=${to_date}`,
        }),
        getSalesByHours: builder.query({
            query: ({ date }) =>
                `/SalesByHours?Date=${date}`,
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
            query: ({ from_date, to_date }) =>
                `/InvoicesByDate?FromDate=${from_date}&ToDate=${to_date}`,
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
    useGetFullSalesQuery,
    useGetSalesCategoryQuery,
    useGetSalesItemsQuery,
    useGetSalesByCashierQuery,
    useGetBestSellerItemsQuery,
    useGetBestSellerCategoryQuery,
    useGetSalesByDaysQuery,
    useGetSalesByHoursQuery,
    useGetSalesmanSalesQuery,
    useGetReturnByInvoicesQuery,
    useGetReturnByItemsQuery,
    useGetInvoicesByDateQuery,
    useGetItemTransactionQuery,
    useGetInventoryStatementQuery,
    useGetDailyProfitQuery,
    useGetItemsProfitsQuery,
    useGetItemSalesTransactionQuery,
} = reportsApi;

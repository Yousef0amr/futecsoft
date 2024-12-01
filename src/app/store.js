import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/authSlice";
import { branchesApi } from "../features/branchesSlice";
import { productsApi } from "../features/productSlice";
import { categoriesApi } from "../features/categorySlice";
import { taxesApi } from "../features/taxSlice";
import { unitsApi } from "../features/unitSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import { flavorsApi } from "../features/flavorsSlice";
import { offersApi } from "../features/offerSlice";
import { discountsApi } from "../features/discountSlice";
import { currenciesApi } from "../features/currencySlice";
import { deliveryCompaniesApi } from "../features/deliveryCompanySlice";
import { paymentTypesApi } from "../features/paymentTypeSlice";
import { suppliersApi } from "../features/supplierSlice";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [branchesApi.reducerPath]: branchesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [taxesApi.reducerPath]: taxesApi.reducer,
        [unitsApi.reducerPath]: unitsApi.reducer,
        [flavorsApi.reducerPath]: flavorsApi.reducer,
        [offersApi.reducerPath]: offersApi.reducer,
        [discountsApi.reducerPath]: discountsApi.reducer,
        [currenciesApi.reducerPath]: currenciesApi.reducer,
        [deliveryCompaniesApi.reducerPath]: deliveryCompaniesApi.reducer,
        [paymentTypesApi.reducerPath]: paymentTypesApi.reducer,
        [suppliersApi.reducerPath]: suppliersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware,
        branchesApi.middleware,
        productsApi.middleware,
        categoriesApi.middleware,
        taxesApi.middleware,
        unitsApi.middleware,
        flavorsApi.middleware,
        offersApi.middleware,
        discountsApi.middleware,
        currenciesApi.middleware,
        deliveryCompaniesApi.middleware,
        paymentTypesApi.middleware,
        suppliersApi.middleware
    ),
});


setupListeners(store.dispatch)


export default store;
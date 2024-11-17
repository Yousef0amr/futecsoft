import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/authSlice";
import { branchesApi } from "../features/branchesSlice";
import { productsApi } from "../features/productSlice";
import { categoriesApi } from "../features/categorySlice";
import { taxesApi } from "../features/taxSlice";
import { unitsApi } from "../features/unitSlice";
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [branchesApi.reducerPath]: branchesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [taxesApi.reducerPath]: taxesApi.reducer,
        [unitsApi.reducerPath]: unitsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware,
        branchesApi.middleware,
        productsApi.middleware,
        categoriesApi.middleware,
        taxesApi.middleware,
        unitsApi.middleware
    ),
});


setupListeners(store.dispatch)


export default store;
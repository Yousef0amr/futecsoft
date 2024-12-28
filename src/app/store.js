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
import { deliveryDiscountApi } from "../features/deliveryDiscountSlice";
import { userGroupsApi } from "../features/userGroupSlice";
import { usersApi } from "../features/userSlice";
import { userPermissionsApi } from "../features/userPermissionSlice";
import { invoiceDetailsApi, invoicesApi } from "../features/invoiceSlice";
import { voucherInputDetailsApi, voucherInputsApi } from "../features/voucherInputSlice";
import { voucherOutputsApi, voucherOutputDetailsApi } from "../features/voucherOutputSlice";
import { voucherTransferDetailsApi, voucherTransferApi } from "../features/voucherTransferSlice";
import { reportsApi } from "../features/reportsControllerSlice";

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
        [suppliersApi.reducerPath]: suppliersApi.reducer,
        [deliveryDiscountApi.reducerPath]: deliveryDiscountApi.reducer,
        [userGroupsApi.reducerPath]: userGroupsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [userPermissionsApi.reducerPath]: userPermissionsApi.reducer,
        [invoicesApi.reducerPath]: invoicesApi.reducer,
        [invoiceDetailsApi.reducerPath]: invoiceDetailsApi.reducer,
        [voucherInputsApi.reducerPath]: voucherInputsApi.reducer,
        [voucherInputDetailsApi.reducerPath]: voucherInputDetailsApi.reducer,
        [voucherOutputsApi.reducerPath]: voucherOutputsApi.reducer,
        [voucherOutputDetailsApi.reducerPath]: voucherOutputDetailsApi.reducer,
        [voucherTransferApi.reducerPath]: voucherTransferApi.reducer,
        [voucherTransferDetailsApi.reducerPath]: voucherTransferDetailsApi.reducer,
        [reportsApi.reducerPath]: reportsApi.reducer


    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware,
        branchesApi.middleware,
        productsApi.middleware,
        categoriesApi.middleware,
        deliveryDiscountApi.middleware,
        taxesApi.middleware,
        unitsApi.middleware,
        flavorsApi.middleware,
        offersApi.middleware,
        discountsApi.middleware,
        currenciesApi.middleware,
        deliveryCompaniesApi.middleware,
        paymentTypesApi.middleware,
        suppliersApi.middleware,
        userGroupsApi.middleware,
        userPermissionsApi.middleware,
        usersApi.middleware,
        invoicesApi.middleware,
        invoiceDetailsApi.middleware,
        voucherInputsApi.middleware,
        voucherInputDetailsApi.middleware,
        voucherOutputsApi.middleware,
        voucherOutputDetailsApi.middleware,
        voucherTransferApi.middleware,
        voucherTransferDetailsApi.middleware
        , reportsApi.middleware

    ),
});


setupListeners(store.dispatch)


export default store;
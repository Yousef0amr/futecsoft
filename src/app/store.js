import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/authSlice";
import { branchesApi } from "../features/branchesSlice";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [branchesApi.reducerPath]: branchesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, branchesApi.middleware),
});


export default store;
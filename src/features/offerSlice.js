import createDynamicApi from './../utils/generateApiSlice.js';
import { BASEURL, OFFERS } from './../api/endpoints.js';

const transformOfferData = (data) => ({
    WareHouse: data.Warehouse,
    OfferAR: data.OfferAr,
    OfferEN: data.OfferEn,
    ...data,
});

export const offersApi = createDynamicApi({
    reducerPath: 'offersApi',
    baseEndpoint: BASEURL + OFFERS,
});

export const {
    useGetCurrentKeyQuery: useGetCurrentOfferKeyQuery,
    useGetAllQuery: useGetOffersQuery,
    useAddMutation: useAddOfferMutation,
    useUpdateMutation: useUpdateOfferMutation,
    useDeleteMutation: useDeleteOfferMutation,
} = offersApi;

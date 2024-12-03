import { deliveryDiscountApi, useAddMutation, useDeleteMutation, useGetAllQuery, useUpdateMutation } from "../features/deliveryDiscountSlice";
import useEntityManagement from "../hooks/useEntityManagement";


const useDeliveryDiscountManagement = () => {
    return useEntityManagement({
        apiSlice: deliveryDiscountApi,
        queryHook: useGetAllQuery,
        addMutationHook: useAddMutation,
        updateMutationHook: useUpdateMutation,
        deleteMutationHook: useDeleteMutation,
        cacheKey: 'getAll',
        defaultQueryArgs: {
            pageNumber: 1,
            pageSize: 10,
        },
        identifier: 'CompanyID',
    });
}

export default useDeliveryDiscountManagement
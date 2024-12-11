import { useAddVoucherInputMutation, useDeleteVoucherInputMutation, useGetVoucherInputsQuery, useUpdateVoucherInputMutation, voucherInputsApi } from "../features/voucherInputSlice";
import useEntityManagement from "./../hooks/useEntityManagement";

const useVoucherInputManagement = () => {
    return useEntityManagement({
        apiSlice: voucherInputsApi,
        queryHook: useGetVoucherInputsQuery,
        addMutationHook: useAddVoucherInputMutation,
        updateMutationHook: useUpdateVoucherInputMutation,
        deleteMutationHook: useDeleteVoucherInputMutation,
        cacheKey: 'getAll',
        defaultQueryArgs: {
            pageNumber: 1,
            pageSize: 10,
        },
        identifier: 'DocID'
    });
}

export default useVoucherInputManagement

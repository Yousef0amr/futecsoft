import { voucherOutputsApi, useAddVoucherOutputMutation, useGetVoucherOutputsQuery, useUpdateVoucherOutputMutation, useDeleteVoucherOutputMutation } from "../features/voucherOutputSlice";
import useEntityManagement from "./../hooks/useEntityManagement";

const useVoucherOutputManagement = () => {
    return useEntityManagement({
        apiSlice: voucherOutputsApi,
        queryHook: useGetVoucherOutputsQuery,
        addMutationHook: useAddVoucherOutputMutation,
        updateMutationHook: useUpdateVoucherOutputMutation,
        deleteMutationHook: useDeleteVoucherOutputMutation,
        cacheKey: 'getAll',
        defaultQueryArgs: {
            pageNumber: 1,
            pageSize: 10,
        },
        identifier: 'DocNo'
    });
}

export default useVoucherOutputManagement
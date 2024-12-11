import { voucherTransferApi, useAddVoucherTransferMutation, useGetVoucherTransfersQuery, useUpdateVoucherTransferMutation, useDeleteVoucherTransferMutation } from "../features/voucherTransferSlice";
import useEntityManagement from "./../hooks/useEntityManagement";

const useVoucherTransferManagement = () => {
    return useEntityManagement({
        apiSlice: voucherTransferApi,
        queryHook: useGetVoucherTransfersQuery,
        addMutationHook: useAddVoucherTransferMutation,
        updateMutationHook: useUpdateVoucherTransferMutation,
        deleteMutationHook: useDeleteVoucherTransferMutation,
        cacheKey: 'getAll',
        defaultQueryArgs: {
            pageNumber: 1,
            pageSize: 10,
        },
        identifier: 'DocNo'
    });
}

export default useVoucherTransferManagement

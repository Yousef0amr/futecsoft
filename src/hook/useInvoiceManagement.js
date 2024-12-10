import { invoicesApi, useAddInvoiceMutation, useDeleteInvoiceMutation, useGetInvoicesQuery, useUpdateInvoiceMutation } from "../features/invoiceSlice";
import useEntityManagement from "./useEntityManagement";

const useInvoiceManagement = () => {
    return useEntityManagement({
        apiSlice: invoicesApi,
        queryHook: useGetInvoicesQuery,
        addMutationHook: useAddInvoiceMutation,
        updateMutationHook: useUpdateInvoiceMutation,
        deleteMutationHook: useDeleteInvoiceMutation,
        cacheKey: 'getAll',
        defaultQueryArgs: {
            pageNumber: 1,
            pageSize: 10,
        },
        identifier: 'DocID'
    });
}

export default useInvoiceManagement


import useEntityManagement from './../hooks/useEntityManagement';
import { useGetProductByTypeQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation, productsApi } from '../features/productSlice';


const useProductManagement = (activeTab = 'Composite') => {
    return useEntityManagement({
        apiSlice: productsApi,
        queryHook: useGetProductByTypeQuery,
        addMutationHook: useAddProductMutation,
        updateMutationHook: useUpdateProductMutation,
        deleteMutationHook: useDeleteProductMutation,
        cacheKey: 'getProductByType',
        defaultQueryArgs: {
            pageNumber: 1,
            pageSize: 10,
            branch: '',
            productType: activeTab,
        },
        identifier: 'Id',
    });
};



export default useProductManagement;

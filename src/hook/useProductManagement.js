import { useDispatch } from 'react-redux';
import useEntityManagement from './../hooks/useEntityManagement';
import { useGetProductByTypeQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation, productsApi } from '../features/productSlice';


const useProductManagement = (activeTab = 'Composite') => {
    const dispatch = useDispatch();
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
        dispatch,
    });
};



export default useProductManagement;

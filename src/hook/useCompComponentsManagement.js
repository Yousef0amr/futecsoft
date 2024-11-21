import { useDispatch } from 'react-redux';
import useEntityManagement from './../hooks/useEntityManagement';
import { useAddComponentMutation, useGetCompositeComponentsByIdQuery, useDeleteComponentMutation, useUpdateComponentMutation, productsApi } from '../features/productSlice';


const useCompComponentsManagement = (id) => {
    const dispatch = useDispatch();
    return useEntityManagement({
        apiSlice: productsApi,
        queryHook: useGetCompositeComponentsByIdQuery,
        addMutationHook: useAddComponentMutation,
        updateMutationHook: useUpdateComponentMutation,
        deleteMutationHook: useDeleteComponentMutation,
        cacheKey: 'getCompositeComponentsById',
        defaultQueryArgs: id,
        identifier: 'Id',
        dispatch,
    });
};



export default useCompComponentsManagement;

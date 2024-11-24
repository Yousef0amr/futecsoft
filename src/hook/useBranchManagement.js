import { useDispatch } from 'react-redux';
import useEntityManagement from './../hooks/useEntityManagement';
import { branchesApi, useAddBranchMutation, useDeleteBranchMutation, useGetBranchesQuery, useUpdateBranchMutation } from '../features/branchesSlice';



const useBranchManagement = () => {
    const dispatch = useDispatch();
    return useEntityManagement({
        apiSlice: branchesApi,
        queryHook: useGetBranchesQuery,
        addMutationHook: useAddBranchMutation,
        updateMutationHook: useUpdateBranchMutation,
        deleteMutationHook: useDeleteBranchMutation,
        cacheKey: 'getProductByType',
        defaultQueryArgs: {
            pageNumber: 1,
            pageSize: 10,
        },
        identifier: 'BranchId',
        dispatch,
    });
};



export default useBranchManagement;

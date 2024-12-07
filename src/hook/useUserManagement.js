import { usersApi, useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } from "../features/userSlice";
import useEntityManagement from "../hooks/useEntityManagement";

const useUserManagement = () => {
    return useEntityManagement({
        apiSlice: usersApi,
        queryHook: useGetUsersQuery,
        addMutation: useAddUserMutation,
        deleteMutation: useDeleteUserMutation,
        updateMutation: useUpdateUserMutation,
        cacheKey: 'getAll',
        defaultQueryArgs: {
            pageNumber: 1,
            pageSize: 10,
        },
        identifier: 'UserNo'
    });
}

export default useUserManagement

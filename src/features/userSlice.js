import createDynamicApi from "../utils/generateApiSlice";
import { BASEURL, USERS } from "../api/endpoints";

const transformUserData = (data) => {
    return {
        ...data,
    };
};


export const usersApi = createDynamicApi({
    reducerPath: 'usersApi',
    baseEndpoint: BASEURL + USERS,
});
export const {
    useGetCurrentKeyQuery: useGetCurrentUserKeyQuery,
    useGetAllQuery: useGetUsersQuery,
    useAddMutation: useAddUserMutation,
    useUpdateMutation: useUpdateUserMutation,
    useDeleteMutation: useDeleteUserMutation,
} = usersApi;
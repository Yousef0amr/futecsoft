import createDynamicApi from "../utils/generateApiSlice";
import { BASEURL, USERS_GROUP } from "../api/endpoints";

const transformUserGroupData = (data) => {
    return {
        ...data,
    };
};


export const userGroupsApi = createDynamicApi({
    reducerPath: 'userGroupsApi',
    baseEndpoint: BASEURL + USERS_GROUP,
});
export const {
    useGetCurrentKeyQuery: useGetCurrentUserGroupKeyQuery,
    useGetAllQuery: useGetUserGroupsQuery,
    useAddMutation: useAddUserGroupMutation,
    useUpdateMutation: useUpdateUserGroupMutation,
    useDeleteMutation: useDeleteUserGroupMutation,
} = userGroupsApi;
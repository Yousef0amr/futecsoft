import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import AppStrings from '../../config/appStrings'
import { routes } from '../../config/constants'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import FormCard from '../../components/common/FormCard'
import NavButton from '../../components/common/NavButton'
import UserPermissionForm from '../../components/user_management/UserPermissionForm'
import { useGetAllUserPermissionsQuery } from '../../features/userPermissionSlice'

const EditUserPermission = () => {
    const { t } = useTranslation()
    const location = useLocation();
    const { data: permissionsData, isLoading } = useGetAllUserPermissionsQuery({ id: location.state.UserNo })

    const onSubmit = async (data) => {
        console.log(data)
    }

    const permissions = !isLoading && permissionsData ?
        permissionsData.reduce((acc, item) => {
            acc[item.PermissionId] = item.Allow;
            return acc;
        }, {}) : {};

    return (
        <FormCard open={false} icon={faUserLock} title={t(AppStrings.edit_user_permission) + " | " + location.state.UserNo} navButton={<NavButton icon={faArrowRight} title={AppStrings.back} path={routes.permission.list} />}>
            <UserPermissionForm isLoading={null} defaultValuesEdit={permissions} onSubmit={onSubmit} />
        </FormCard>
    )
}

export default EditUserPermission
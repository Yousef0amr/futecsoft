import React from 'react'
import EditComponent from '../../components/common/EditComponent'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../utils/appStrings'
import { useLocation } from 'react-router-dom'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import UnitForm from '../../components/unit/UnitForm'
import useUnitManagement from '../../hook/useUnitManagement'
import useEntityOperations from '../../hooks/useEntityOperations'
import { routes } from '../../utils/constants'

const EditUnit = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = useUnitManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.unit_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faBalanceScale} title={t(AppStrings.edit_unit) + '  | ' + loaction.state.UnitID} path={routes.unit.list} >
            <UnitForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={loaction.state} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditUnit

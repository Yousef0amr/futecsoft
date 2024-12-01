import React from 'react'
import EditComponent from '../../components/common/EditComponent'
import { faVcard } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { routes } from '../../utils/constants'
import { useTranslation } from 'react-i18next'
import SupplierForm from '../../components/supplier/SupplierForm'
import useSupplierManagement from '../../hook/useSupplierManagement'
import useEntityOperations from '../../hooks/useEntityOperations'
import AppStrings from '../../utils/appStrings'

const EditSupplier = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = useSupplierManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.supplier_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faVcard} title={t(AppStrings.edit_supplier) + '  | ' + loaction.state.SupplierId} path={routes.supplier.list} >
            <SupplierForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={loaction.state} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditSupplier

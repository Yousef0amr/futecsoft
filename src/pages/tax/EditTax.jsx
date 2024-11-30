import React from 'react'
import EditComponent from '../../components/common/EditComponent'
import { faUsd } from '@fortawesome/free-solid-svg-icons'
import useTaxManagement from '../../hook/useTaxManagement'
import { useLocation } from 'react-router-dom'
import { routes } from '../../utils/constants'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../utils/appStrings'
import useEntityOperations from '../../hooks/useEntityOperations'
import TaxForm from '../../components/tax/TaxForm'

const EditTax = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = useTaxManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.tax_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faUsd} title={t(AppStrings.edit_tax) + '  | ' + loaction.state.TaxId} path={routes.tax.list} >
            <TaxForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={loaction.state} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditTax

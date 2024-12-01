import React from 'react'
import EditComponent from '../../components/common/EditComponent'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import useCurrencyManagment from '../../hook/useCurrencyManagment'
import { useLocation } from 'react-router-dom'
import { routes } from '../../utils/constants'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../utils/appStrings'
import useEntityOperations from '../../hooks/useEntityOperations'
import CurrencyForm from '../../components/currency/CurrencyForm'

const EditCurrency = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = useCurrencyManagment()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.currency_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faMoneyBill} title={t(AppStrings.edit_currency) + '  | ' + loaction.state.CurrencyId} path={routes.currency.list} >
            <CurrencyForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={loaction.state} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditCurrency
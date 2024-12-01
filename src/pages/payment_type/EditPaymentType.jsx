import React from 'react'
import EditComponent from '../../components/common/EditComponent'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../utils/appStrings'
import { useLocation } from 'react-router-dom'
import { routes } from '../../utils/constants'
import { useTranslation } from 'react-i18next'
import usePaymentTypeManagement from '../../hook/usePaymentTypeManagement'
import useEntityOperations from '../../hooks/useEntityOperations'
import PaymentTypeForm from '../../components/payment_type/PaymentTypeForm'

const EditPaymentType = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = usePaymentTypeManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.paymentType_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faCreditCard} title={t(AppStrings.edit_paymentType) + '  | ' + loaction.state.Ptype} path={routes.paymentMethod.list} >
            <PaymentTypeForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={loaction.state} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditPaymentType

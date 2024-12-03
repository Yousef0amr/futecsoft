import React from 'react'
import EditComponent from '../../components/common/EditComponent'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../config/appStrings'
import { useLocation } from 'react-router-dom'
import { routes } from '../../config/constants'
import { useTranslation } from 'react-i18next'
import usePaymentTypeManagement from '../../hook/usePaymentTypeManagement'
import PaymentTypeForm from '../../components/payment_type/PaymentTypeForm'

const EditPaymentType = () => {
    const loaction = useLocation()
    const { t } = useTranslation();


    return (
        <EditComponent
            errorMessage={AppStrings.something_went_wrong}
            successMessage={AppStrings.paymentType_updated_successfully}
            fetchHook={usePaymentTypeManagement}
            icon={faCreditCard}
            title={t(AppStrings.edit_paymentType) + '  | ' + loaction.state.Ptype}
            path={routes.paymentMethod.list}
            Form={PaymentTypeForm}
            editData={loaction.state}
        />
    )
}

export default EditPaymentType

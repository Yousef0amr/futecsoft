import React, { useEffect } from 'react'
import FormFieldsComponent from '../common/FormFieldsComponent'
import { paymentTypesFormFields } from '../../utils/constants';
import useDeliveryCompanyManagement from '../../hook/useDeliveryCompanyManagement';



const PaymentTypeFormFields = ({ register, errors, watch, setValue }) => {
    const { data: deliveryCompanyData, isLoading: isLoadingDeliveryCompany } = useDeliveryCompanyManagement()
    const deliveryCompanies = !isLoadingDeliveryCompany
        ? deliveryCompanyData?.map((item) => ({ value: item.CompanyID, label: item.CompanyName }))
        : [];



    return (
        <FormFieldsComponent errors={errors} register={register} setValue={setValue} options={{ CompanyID: deliveryCompanies }} watch={watch} fields={paymentTypesFormFields} />
    )
}

export default PaymentTypeFormFields

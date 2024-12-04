import React from 'react'
import { deliveryCompaniesFormFields } from '../../config/formFields'
import FormFieldsComponent from '../common/FormFieldsComponent'


const DeliveryCompanyFormFields = ({ register, errors, watch, setValue }) => {
    return (
        <FormFieldsComponent errors={errors} register={register} setValue={setValue} watch={watch} fields={deliveryCompaniesFormFields} />
    )
}

export default DeliveryCompanyFormFields
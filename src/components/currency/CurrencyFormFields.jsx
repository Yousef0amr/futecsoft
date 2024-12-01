import React from 'react'
import FormFieldsComponent from '../common/FormFieldsComponent'
import { currenciesFormFields } from '../../utils/constants'

const CurrencyFormFields = ({ register, errors, watch, setValue }) => {
    return (
        <FormFieldsComponent errors={errors} register={register} watch={watch} setValue={setValue} fields={currenciesFormFields} />
    )
}

export default CurrencyFormFields
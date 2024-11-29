import React from 'react'
import { discountsFormFields } from '../../utils/constants'
import FormFieldsComponent from '../common/FormFieldsComponent'

const DiscountFormFields = ({ register, errors, watch, setValue }) => {
    return (
        <FormFieldsComponent errors={errors} register={register} setValue={setValue} watch={watch} fields={discountsFormFields} />
    )
}

export default DiscountFormFields

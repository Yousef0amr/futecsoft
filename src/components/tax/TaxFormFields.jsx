import React from 'react'
import FormFieldsComponent from '../common/FormFieldsComponent'
import { taxsFormFields } from '../../utils/constants'

const TaxFormFields = ({ register, errors, setValue, watch }) => {
    return (
        <FormFieldsComponent errors={errors} register={register} watch={watch} setValue={setValue} fields={taxsFormFields} />
    )
}

export default TaxFormFields

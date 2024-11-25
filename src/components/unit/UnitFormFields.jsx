import React from 'react'
import { unitsFormFields } from '../../utils/constants'
import FormFieldsComponent from '../common/FormFieldsComponent'

const UnitFormFields = ({ register, errors, watch, setValue }) => {
    return (
        <FormFieldsComponent errors={errors} register={register} watch={watch} setValue={setValue} fields={unitsFormFields} />
    )
}

export default UnitFormFields

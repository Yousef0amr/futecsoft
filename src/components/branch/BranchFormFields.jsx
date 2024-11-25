import React from 'react'
import { branchFormFields } from '../../utils/constants'
import FormFieldsComponent from '../common/FormFieldsComponent'

const BranchFormFields = ({ register, errors }) => {
    return (
        <FormFieldsComponent errors={errors} register={register} fields={branchFormFields} />
    )
}

export default BranchFormFields

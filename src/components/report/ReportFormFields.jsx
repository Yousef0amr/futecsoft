import React from 'react'
import FormFieldsComponent from '../common/FormFieldsComponent'


const ReportFormFields = ({ fields, register, errors, options, setValue, watch }) => {
    return (
        <FormFieldsComponent errors={errors} register={register} setValue={setValue} options={options} watch={watch} fields={fields} />
    )
}

export default ReportFormFields

import React from 'react'
import ReportFormFields from './ReportFormFields'
import SearchFormComponent from '../common/SearchFormComponent'


const ReportForm = ({ onSubmit, isLoading, schema, options, fields }) => {

    return (
        <SearchFormComponent schema={schema} onSubmit={onSubmit} isLoading={isLoading} >
            {({ register, errors, setValue, watch }) => (
                <ReportFormFields fields={fields} options={options} register={register} errors={errors} setValue={setValue} watch={watch} />
            )
            }
        </SearchFormComponent>
    )
}

export default ReportForm
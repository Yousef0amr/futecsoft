import React from 'react'
import useValidators from '../../hooks/useValidators';
import InvoiceItemFormFields from './InvoiceItemFormFields';
import FormComponent from './../common/FormComponent';
const InvoiceItemForm = ({ onSubmit, isLoading, defaultValuesEdit = {} }) => {
    const { flavorSchema } = useValidators();
    return (
        <FormComponent isLoading={isLoading} defaultValues={defaultValuesEdit} schema={flavorSchema} onSubmit={onSubmit}>
            {({ register, errors, setValue, watch }) => (
                <InvoiceItemFormFields register={register} errors={errors} setValue={setValue} watch={watch} />
            )}
        </FormComponent>
    )
}

export default InvoiceItemForm

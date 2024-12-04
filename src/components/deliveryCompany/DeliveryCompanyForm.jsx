import React from 'react'
import FormComponent from '../common/FormComponent'
import { useValidators } from '../../utils/validators'
import DeliveryCompanyFormFields from './deliveryCompanyFormFields'

const DeliveryCompanyForm = ({ onSubmit, isLoading, defaultValuesEdit = {} }) => {
    const { currencySchema } = useValidators();
    return (
        <FormComponent isLoading={isLoading} defaultValues={defaultValuesEdit} schema={currencySchema} onSubmit={onSubmit}>
            {({ register, errors, setValue, watch }) => (
                <DeliveryCompanyFormFields register={register} errors={errors} setValue={setValue} watch={watch} />
            )}
        </FormComponent>
    )
}

export default DeliveryCompanyForm

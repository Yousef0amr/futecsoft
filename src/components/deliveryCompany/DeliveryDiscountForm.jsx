import React from 'react'
import useValidators from '../../hooks/useValidators';
import FormComponent from '../common/FormComponent';
import DeliveryDiscountFormFields from './deliveryDiscountFormFields';

const DeliveryDiscountForm = ({ onSubmit, isLoading, defaultValuesEdit = {} }) => {
    const { currencySchema } = useValidators();
    return (
        <FormComponent isLoading={isLoading} defaultValues={defaultValuesEdit} schema={currencySchema} onSubmit={onSubmit}>
            {({ register, errors, setValue, watch }) => (
                <DeliveryDiscountFormFields register={register} errors={errors} setValue={setValue} watch={watch} />
            )}
        </FormComponent>
    )
}

export default DeliveryDiscountForm

import React from 'react'
import useValidators from '../../hooks/useValidators';
import InvoiceInfoFormFields from './InvoiceInfoFormFields';
import InvoiceItemFormFields from './InvoiceItemFormFields';
import FormComponent from './../common/FormComponent';
import AppStrings from '../../config/appStrings';
import { useTranslation } from 'react-i18next';
const InvoiceInfoForm = ({ onSubmit, isLoading, defaultValuesEdit = {}, isAdd = false }) => {
    const { invoiceSchema } = useValidators();
    const { t } = useTranslation();

    return (
        <FormComponent isLoading={isLoading} defaultValues={defaultValuesEdit} schema={invoiceSchema} onSubmit={onSubmit}>
            {({ register, errors, setValue, watch }) =>
                <>

                    <InvoiceInfoFormFields register={register} errors={errors} setValue={setValue} watch={watch} />
                    {
                        isAdd && <>
                            <p className="text-danger mt-3">{t(AppStrings.add_first_item_invoice)}</p>
                            <InvoiceItemFormFields register={register} errors={errors} setValue={setValue} watch={watch} />
                        </>
                    }
                </>
            }
        </FormComponent>
    )
}

export default InvoiceInfoForm

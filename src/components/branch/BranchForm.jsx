import React from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import Form from 'react-bootstrap/Form';
import AppStrings from '../../utils/appStrings';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import InputField from '../common/InputFiled';






const BranchForm = ({ isLoading }) => {
    const { branchSchema } = useValidators();
    const { t } = useTranslation();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
    };

    const formFields = [
        { name: 'BranchId', label: t(AppStrings.branchId), required: false, type: 'number' },
        { name: 'BranchNameAr', label: t(AppStrings.branchNameAr), required: true, type: 'text' },
        { name: 'BranchNameEn', label: t(AppStrings.branchNameEn), required: true, type: 'text' },
        { name: 'TaxId', label: t(AppStrings.taxId), required: false, type: 'number' },
        { name: 'Phones', label: t(AppStrings.phones), required: false, type: 'number' },
        { name: 'Mobiles', label: t(AppStrings.mobiles), required: false, type: 'number' },
        { name: 'Website', label: t(AppStrings.website), required: false, type: 'text' },
        { name: 'Email', label: t(AppStrings.email), required: false, type: 'email' },
        { name: 'Address', label: t(AppStrings.address), required: false, type: 'text' },
        { name: 'City', label: t(AppStrings.city), required: false, type: 'text' },
        { name: 'Street', label: t(AppStrings.street), required: false, type: 'text' },
    ];



    return (
        <FormComponent schema={branchSchema} onSubmit={onSubmit}>
            {({ register, errors }) => (
                <Row style={{ marginTop: '10px' }}>
                    {formFields.map((field) => (
                        <InputField
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            register={register}
                            errors={errors}
                            required={field.required}
                            type={field.type}
                            min={0}
                        />
                    ))}
                </Row>
            )}
        </FormComponent>
    );
};

export default BranchForm;

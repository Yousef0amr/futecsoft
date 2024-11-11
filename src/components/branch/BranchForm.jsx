import React from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import AppStrings from '../../utils/appStrings';
import { Row, Col } from 'react-bootstrap';
import InputField from '../common/InputFiled';


const BranchForm = ({ onSubmit, isLoading, defaultValues = {} }) => {
    const { branchSchema } = useValidators();


    const formFields = [
        { name: 'BranchId', label: AppStrings.branchId, required: false, type: 'number' },
        { name: 'BranchNameAr', label: AppStrings.branchNameAr, required: true, type: 'text' },
        { name: 'BranchNameEn', label: AppStrings.branchNameEn, required: true, type: 'text' },
        { name: 'TaxId', label: AppStrings.taxId, required: false, type: 'number' },
        { name: 'Phones', label: AppStrings.phones, required: false, type: 'number' },
        { name: 'Mobiles', label: AppStrings.mobiles, required: false, type: 'number' },
        { name: 'Website', label: AppStrings.website, required: false, type: 'text' },
        { name: 'Email', label: AppStrings.email, required: false, type: 'email' },
        { name: 'Address', label: AppStrings.address, required: false, type: 'text' },
        { name: 'City', label: AppStrings.city, required: false, type: 'text' },
        { name: 'Street', label: AppStrings.street, required: false, type: 'text' },
    ];

    return (
        <FormComponent isLoading={isLoading} defaultValues={defaultValues} schema={branchSchema} onSubmit={onSubmit}>
            {({ register, errors }) => (
                <Row style={{ marginTop: '10px' }}>
                    {formFields.map((field) => (
                        <Col xs={12} md={6} key={field.name}>
                            <InputField
                                name={field.name}
                                label={field.label}
                                register={register}
                                errors={errors}
                                required={field.required}
                                type={field.type}
                                min={0}
                            /></Col>
                    ))}
                </Row>
            )}
        </FormComponent>
    );
};

export default BranchForm;

import React from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import { Row, Col } from 'react-bootstrap';
import InputField from '../common/InputFiled';
import BrowserImage from '../common/BrowserImage';
import SelectMenu from '../common/SelectMenu';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import CheckBox from '../common/CheckBox';

const ProductForm = ({ onSubmit, isLoading, defaultValues = {} }) => {
    const { productSchemaValidator } = useValidators();
    const { t } = useTranslation();

    const formFields = [
        { name: 'Id', label: AppStrings.productId, required: false, type: 'number' },
        { name: 'NameAr', label: AppStrings.productNameAr, required: true, type: 'text' },
        { name: 'NameEn', label: AppStrings.productNameEn, required: true, type: 'text' },
        { name: 'Barcode', label: AppStrings.barcode, required: false, type: 'text' },
    ];

    const selectFormFields = [
        { name: 'Warehouse', label: AppStrings.branch, required: false, type: 'number', options: [{ value: '1', label: 'Warehouse 1' }, { value: '2', label: 'Warehouse 2' }] },
        { name: 'Father', label: AppStrings.categoryId, required: false, type: 'text', options: [{ value: 'A', label: 'Category A' }, { value: 'B', label: 'Category B' }] },
        { name: 'UnitID', label: AppStrings.unit, required: false, type: 'text', options: [{ value: 'kg', label: 'Kilogram' }, { value: 'ltr', label: 'Liter' }] },
        { name: 'TaxPercentage', label: AppStrings.taxPercentage, required: true, type: 'select', options: [{ value: '0', label: '0%' }, { value: '5', label: '5%' }, { value: '10', label: '10%' }] },
    ];

    const switchFormFields = [
        { name: 'Discountable', label: AppStrings.discountable, required: false },
        { name: 'IsService', label: AppStrings.isService, required: false },
        { name: 'IsActive', label: AppStrings.isActive, required: true },
        { name: 'Saleable', label: AppStrings.saleable, required: true },
        { name: 'Taxable', label: AppStrings.taxable, required: false },
    ];

    const priceFormFields = [
        { name: 'Price1', label: AppStrings.price1, required: true, type: 'number' },
        { name: 'Price2', label: AppStrings.price2, required: false, type: 'number' },
        { name: 'Price3', label: AppStrings.price3, required: false, type: 'number' },
        { name: 'Price4', label: AppStrings.price4, required: false, type: 'number' },



    ];

    return (
        <FormComponent isLoading={isLoading} defaultValues={defaultValues} schema={productSchemaValidator} onSubmit={onSubmit}>
            {({ register, errors, setValue, watch }) => (
                <Row style={{ marginTop: '15px' }} lg={2}>
                    <Col lg={12} >
                        <BrowserImage />
                    </Col>
                    <Col>
                        <Row className=''>
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
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Row className=''>
                            {selectFormFields.map((field) => (
                                <Col xs={12} md={6} key={field.name}>
                                    <SelectMenu
                                        name={field.name}
                                        value={watch(field.name)}
                                        onChange={(value) => setValue(field.name, value)}
                                        options={field.options}
                                        label={field.label}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col>
                        <Row className=''>
                            {priceFormFields.map((field) => (
                                <Col xs={12} md={6} key={field.name}>
                                    {
                                        field.type === 'select' ? (
                                            <SelectMenu
                                                name={field.name}
                                                value={watch(field.name)}
                                                onChange={(value) => setValue(field.name, value)}
                                                options={field.options}
                                                label={field.label}
                                            />
                                        ) : field.type === 'checkbox' ? (
                                            <CheckBox
                                                label={field.label}
                                                isChecked={watch(field.name)}
                                                onChange={(value) => setValue(field.name, value)}
                                            />
                                        ) : (
                                            <InputField
                                                name={field.name}
                                                label={field.label}
                                                register={register}
                                                errors={errors}
                                                required={field.required}
                                                type={field.type}
                                                min={0}
                                            />
                                        )
                                    }
                                </Col>
                            ))}
                        </Row>
                        <Row className=''>
                            {switchFormFields.map((field) => (
                                <Col xs={12} md={6} key={field.name}>
                                    <CheckBox
                                        label={field.label}
                                        isChecked={watch(field.name)}
                                        onChange={(value) => setValue(field.name, value)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                </Row>
            )}
        </FormComponent>
    );
};

export default ProductForm;

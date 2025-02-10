import React from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import { Row } from 'react-bootstrap';
import ProductFormFields1 from './ProductFormFields1';
import ProductFormFields2 from './ProductFormFields2';
import ProductImageField from './ProductImageField';

const ProductForm = ({ onSubmit, isLoading, resetForm, enableReset, defaultValuesEdit = {}, composite }) => {
    const { productSchema } = useValidators();

    return (
        <FormComponent enableReset={enableReset} isLoading={isLoading} resetForm={resetForm} defaultValues={defaultValuesEdit} schema={productSchema} onSubmit={onSubmit}>
            {({ register, errors, setValue, watch }) => (
                <Row style={{ marginTop: '15px' }} lg={2}>
                    <ProductImageField errors={errors} setValue={setValue} watch={watch} />
                    <ProductFormFields1 register={register} errors={errors} watch={watch} setValue={setValue} />
                    <ProductFormFields2 register={register} errors={errors} watch={watch} setValue={setValue} composite={composite} />

                </Row>
            )}
        </FormComponent>
    );
};

export default ProductForm;

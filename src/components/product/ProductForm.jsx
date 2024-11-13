import React, { useEffect } from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import { Row } from 'react-bootstrap';
import ProductFormFields1 from './ProductFormFields1';
import ProductFormFields2 from './ProductFormFields2';
import ProductImageField from './ProductImageField';

const ProductForm = ({ onSubmit, isLoading, defaultValuesEdit = {} }) => {
    const { productSchema } = useValidators();

    return (
        <FormComponent isLoading={isLoading} defaultValues={defaultValuesEdit} schema={productSchema} onSubmit={onSubmit}>
            {({ register, errors, setValue, watch }) => (
                <Row style={{ marginTop: '15px' }} lg={2}>
                    <ProductImageField errors={errors} setValue={setValue} />
                    <ProductFormFields1 register={register} errors={errors} watch={watch} setValue={setValue} />
                    <ProductFormFields2 register={register} errors={errors} watch={watch} setValue={setValue} />
                </Row>
            )}
        </FormComponent>
    );
};

export default ProductForm;

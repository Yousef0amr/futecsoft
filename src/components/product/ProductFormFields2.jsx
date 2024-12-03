import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import InputField from '../common/InputFiled'
import CheckBox from '../common/CheckBox'
import { productCheckFormFields, productPriceFormFields } from '../../config/formFields'
import FormFieldsComponent from '../common/FormFieldsComponent'

const ProductFormFields2 = ({ register, errors, watch, setValue, composite }) => {

    const priceChange = watch('Price')
    useEffect(() => {
        ['Price2', 'Price3', 'Price4'].forEach((field) => {
            setValue(field, priceChange);
        });
    }, [priceChange, setValue]);
    return (
        <Col>
            <FormFieldsComponent fields={productPriceFormFields} setValue={setValue} errors={errors} register={register} watch={watch} />
            <Row className=''>
                {productCheckFormFields.map((field) => (

                    <Col xs={12} md={6} key={field.name}>
                        {
                            field.name === 'PreparationTime' && composite ?
                                <InputField
                                    name={field.name}
                                    label={field.label}
                                    register={register}
                                    errors={errors}
                                    required={field.required}
                                    type={field.type}
                                    min={0}
                                /> : field.name === 'PreparationTime' && !composite ?
                                    null : <CheckBox
                                        label={field.label}
                                        isChecked={watch(field.name)}
                                        onChange={(value) => setValue(field.name, value)}
                                        required={field.required}
                                    />
                        }
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default ProductFormFields2

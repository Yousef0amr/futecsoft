import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InputField from '../common/InputFiled'
import SelectMenu from '../common/SelectMenu'
import { productformFields, productSelectFormFields } from '../../utils/constants'

const ProductFormFields1 = ({ register, errors, watch, setValue }) => {



    return (
        <Col>
            <Row className=''>
                {productformFields.map((field) => (
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
                {productSelectFormFields.map((field) => (
                    <Col xs={12} md={6} key={field.name}>
                        <SelectMenu
                            value={watch(field.name)}
                            onChange={(e) => setValue(field.name, e.target.value)}
                            options={field.options}
                            label={field.label}
                            required={field.required}
                        />
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default ProductFormFields1

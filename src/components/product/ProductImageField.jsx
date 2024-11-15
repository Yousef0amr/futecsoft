import React from 'react'
import { Col } from 'react-bootstrap'
import BrowserImage from '../common/BrowserImage'
import { productImageField } from '../../utils/constants'

const ProductImageField = ({ errors, setValue, watch }) => {
    return (
        <Col lg={12} >
            <BrowserImage errors={errors} setValue={setValue} field={productImageField} watch={watch} />
        </Col>
    )
}

export default ProductImageField

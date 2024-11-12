import React from 'react'
import { Col } from 'react-bootstrap'
import BrowserImage from '../common/BrowserImage'
import { productImageField } from '../../utils/constants'

const ProductImageField = ({ errors, setValue }) => {
    return (
        <Col lg={12} >
            <BrowserImage errors={errors} setValue={setValue} field={productImageField} />
        </Col>
    )
}

export default ProductImageField

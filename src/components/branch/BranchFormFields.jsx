import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InputField from '../common/InputFiled'
import { branchFormFields } from '../../utils/constants'

const BranchFormFields = ({ register, errors }) => {
    return (
        <Row style={{ marginTop: '10px' }}>
            {branchFormFields.map((field) => {
                return <Col xs={12} md={6} key={field.name}>
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
            })}
        </Row>
    )
}

export default BranchFormFields

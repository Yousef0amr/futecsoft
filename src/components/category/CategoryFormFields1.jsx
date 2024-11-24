import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InputField from '../common/InputFiled'
import { categoryFormFields as categoryFormFieldsConstants } from '../../utils/constants'
import SelectMenu from '../common/SelectMenu'
import CheckBox from '../common/CheckBox'
import useBranchManagement from '../../hook/useBranchManagement'

const CategoryFormFields = ({ register, errors, setValue, watch }) => {
    const { data: branchesData, isLoading: isLoadingBranches } = useBranchManagement()

    const branches = !isLoadingBranches
        ? branchesData?.map((item) => ({ value: item.BranchId.toString(), label: item.BranchNameAr }))
        : [];

    return (
        <Row style={{ marginTop: '10px' }}>
            {categoryFormFieldsConstants.map((field) => {
                return <Col xs={12} md={6} key={field.name}>
                    {(field.type === 'text' || field.type === 'number') &&
                        <InputField
                            name={field.name}
                            label={field.label}
                            register={register}
                            disabled={field.disabled}
                            errors={errors}
                            required={field.required}
                            type={field.type}
                            min={0}
                        />
                    }
                    {
                        field.type === 'select' && <SelectMenu
                            watch={watch}
                            onChange={(e) => setValue(field.name, e.target.value)}
                            errors={errors}
                            name={field.name}
                            options={
                                branches
                            }
                            label={field.label}
                            required={field.required}
                        />
                    }

                    {
                        field.type === 'check' && <CheckBox
                            label={field.label}
                            isChecked={watch(field.name)}
                            onChange={(value) => setValue(field.name, value)}
                            required={field.required}
                        />
                    }
                </Col>
            })}
        </Row>
    )
}

export default CategoryFormFields

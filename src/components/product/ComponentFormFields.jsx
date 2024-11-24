import React from 'react'
import { productComponentsFormFields, productComponentsFormFields1 } from '../../utils/constants'
import { Col, Row } from 'react-bootstrap'
import InputField from '../common/InputFiled'
import SelectMenu from '../common/SelectMenu'
import { useGetProductsByCategoryQuery, useGetProductUnitsByIdQuery } from '../../features/productSlice'
import useCategoryManagement from '../../hook/useCategoryManagement'

const ComponentFormFields = ({ register, errors, watch, setValue }) => {
    const { data: categoriesData, isLoading: isLoadingCategories } = useCategoryManagement();
    const { data: unitsData, isLoading: isLoadingUnits } = useGetProductUnitsByIdQuery(watch('SubItem'));
    const { data: productsData, isLoading: isLoadingProducts } = useGetProductsByCategoryQuery(watch('Father'));

    const categories = !isLoadingCategories
        ? categoriesData?.map((item) => ({ value: item.Id, label: item.NameAr }))
        : [];

    const units = !isLoadingUnits
        ? unitsData?.map((item) => ({ value: item.UnitId, label: item.UnitAr }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.ProID, label: item.Pro_AR_Name }))
        : [];

    return (
        <Col>
            <Row>
                {productComponentsFormFields.map((field) => (
                    <Col xs={12} md={6} key={field.name}>
                        <InputField
                            name={field.name}
                            label={field.label}
                            register={register}
                            errors={errors}
                            required={field.required}
                            type={field.type}
                            disabled={field.disabled}
                            min={0}
                        />
                    </Col>
                ))}
            </Row>
            <Row>
                {productComponentsFormFields1.map((field) => (
                    <Col xs={12} md={6} key={field.name}>
                        <SelectMenu
                            onChange={(e) => setValue(field.name, e.target.value)}
                            errors={errors}
                            name={field.name}
                            watch={watch}
                            options={
                                field.name === 'Father' ?
                                    categories : field.name === 'Unit' ?
                                        units : products
                            }
                            label={field.label}
                            required={field.required}
                        />
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default ComponentFormFields

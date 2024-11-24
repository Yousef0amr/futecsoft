import React from 'react'
import { productComponentsFormFields, productComponentsFormFields1 } from '../../utils/constants'
import { useGetCategoriesQuery } from '../../features/categorySlice'
import { Col, Row } from 'react-bootstrap'
import InputField from '../common/InputFiled'
import SelectMenu from '../common/SelectMenu'
import { useGetProductsByCategoryQuery, useGetProductUnitsByIdQuery } from '../../features/productSlice'

const ComponentFormFields = ({ register, errors, watch, setValue }) => {
    const { data: categoriesData, isLoading: isLoadingCategories } = useGetCategoriesQuery({ pageNumber: 1, pageSize: 10 });
    const { data: unitsData, isLoading: isLoadingUnits } = useGetProductUnitsByIdQuery(watch('SubItem'));
    const { data: productsData, isLoading: isLoadingProducts } = useGetProductsByCategoryQuery(watch('Father'));

    const categories = !isLoadingCategories
        ? categoriesData?.map((item) => ({ value: item.CatID, label: item.Cat_AR_Name }))
        : [];

    const units = !isLoadingUnits
        ? unitsData?.map((item) => ({ value: item.UnitId, label: item.UnitAr }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.ProID, label: item.Pro_AR_Name }))
        : [];

    const onSelectChange = (value, name) => {
        setValue(name, value);
    };

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
                            disabled={field.name === 'ItemID' || field.name === 'Name'}
                            min={0}
                        />
                    </Col>
                ))}
            </Row>
            <Row>
                {productComponentsFormFields1.map((field) => (
                    <Col xs={12} md={6} key={field.name}>
                        <SelectMenu
                            onChange={(e) => onSelectChange(e.target.value, field.name)}
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

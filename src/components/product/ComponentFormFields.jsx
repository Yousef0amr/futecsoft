import React from 'react'
import { productComponentsFormFields, productComponentsFormFields1 } from '../../utils/constants'
import { Col } from 'react-bootstrap'
import { useGetProductsByCategoryQuery, useGetProductUnitsByIdQuery } from '../../features/productSlice'
import useCategoryManagement from '../../hook/useCategoryManagement'
import FormFieldsComponent from '../common/FormFieldsComponent'

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
            <FormFieldsComponent errors={errors} register={register} watch={watch} setValue={setValue} fields={productComponentsFormFields} />
            <FormFieldsComponent errors={errors} register={register} watch={watch} setValue={setValue} options={
                {
                    Father: categories,
                    Unit: units,
                    SubItem: products
                }
            } fields={productComponentsFormFields1} />
        </Col>
    )
}

export default ComponentFormFields

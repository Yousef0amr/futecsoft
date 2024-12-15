import React, { useEffect } from 'react'
import { invoiceItemsFormFields } from '../../config/formFields'
import FormFieldsComponent from '../common/FormFieldsComponent'
import { useLazyGetProductUnitsByIdQuery, useLazyGetStandardAndRawMaterialsQuery } from '../../features/productSlice'

const InvoiceItemFormFields = ({ register, errors, setValue, watch }) => {
    const [triggerGetProductUnitsById, { data: unitsData, isLoading: isLoadingUnits }] = useLazyGetProductUnitsByIdQuery();
    const [triggerGetStandardAndRawMaterials, { data: productsData, isLoading: isLoadingProducts }] = useLazyGetStandardAndRawMaterialsQuery();


    useEffect(() => {
        if (watch('Warehouse')) {
            triggerGetStandardAndRawMaterials({ Warehouse: watch('Warehouse'), pageNumber: 1, pageSize: 10 });
        }
        if (watch('ItemId')) {
            triggerGetProductUnitsById(watch('ItemId'));
        }
    }, [watch('Warehouse'), watch('ItemId')]);


    const units = !isLoadingUnits
        ? unitsData?.map((item) => ({ value: item.UnitId, label: item.UnitAr }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.Id, label: item.NameAr }))
        : [];

    return (
        <FormFieldsComponent fields={invoiceItemsFormFields} options={{ ItemId: productsData ? products : [], Unit: unitsData ? units : [] }} setValue={setValue} errors={errors} register={register} watch={watch} />
    )
}

export default InvoiceItemFormFields

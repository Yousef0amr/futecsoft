import React from 'react'
import { invoiceItemsFormFields } from '../../config/formFields'
import FormFieldsComponent from '../common/FormFieldsComponent'
import { useGetProductUnitsByIdQuery, useGetStandardAndRawMaterialsQuery } from '../../features/productSlice'

const InvoiceItemFormFields = ({ register, errors, setValue, watch }) => {
    const { data: unitsData, isLoading: isLoadingUnits } = useGetProductUnitsByIdQuery(watch('ItemId'));
    const { data: productsData, isLoading: isLoadingProducts } = useGetStandardAndRawMaterialsQuery(
        watch('Warehouse') ? {
            Warehouse: watch('Warehouse'),
            pageNumber: 1,
            pageSize: 100
        } : null, // Passing null or an empty object will prevent the query from being triggered
        {
            skip: !watch('Warehouse')  // Skipping the query when there is no value in Warehouse
        }
    );


    const units = !isLoadingUnits
        ? unitsData?.map((item) => ({ value: item.UnitId, label: item.UnitAr }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.Id, label: item.NameAr }))
        : [];



    return (
        <FormFieldsComponent fields={invoiceItemsFormFields} options={{
            ItemId: productsData ? products : [],
            Unit: unitsData ? units : []
        }} setValue={setValue} errors={errors} register={register} watch={watch} />
    )
}

export default InvoiceItemFormFields

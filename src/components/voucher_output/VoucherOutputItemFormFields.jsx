import React from 'react'
import { voucherOutputItemsFormFields } from '../../config/formFields'
import FormFieldsComponent from '../common/FormFieldsComponent'
import { useEffect } from 'react';
import { useLazyGetProductUnitsByIdQuery, useLazyGetStandardAndRawMaterialsQuery } from '../../features/productSlice';

const VoucherOutputItemFormFields = ({ errors, register, watch, setValue }) => {
    const [triggerGetProductUnitsById, { data: unitsData, isLoading: isLoadingUnits }] = useLazyGetProductUnitsByIdQuery();
    const [triggerGetStandardAndRawMaterials, { data: productsData, isLoading: isLoadingProducts }] = useLazyGetStandardAndRawMaterialsQuery();

    const units = !isLoadingUnits
        ? unitsData?.map((item) => ({ value: item.UnitId, label: item.UnitAr }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.Id, label: item.NameAr }))
        : [];

    useEffect(() => {
        if (watch('Warehouse')) {
            triggerGetStandardAndRawMaterials({ Warehouse: watch('Warehouse'), pageNumber: 1, pageSize: 10 });
        }


    }, []);

    useEffect(() => {
        if (watch('ItemId')) {
            triggerGetProductUnitsById(watch('ItemId'));
        }
    }, [triggerGetProductUnitsById, watch]);
    const onSelectChange = (value, name) => {
        if (name === 'Warehouse') {
            triggerGetStandardAndRawMaterials({ Warehouse: value, pageNumber: 1, pageSize: 10 });
        }
        if (name === 'ItemId') {
            triggerGetProductUnitsById(value);
        }
    };
    return (
        <FormFieldsComponent triggerEvent={onSelectChange} options={{
            ItemId: productsData ? products : [],
            Unit: unitsData ? units : []
        }} errors={errors} register={register} setValue={setValue} watch={watch} fields={voucherOutputItemsFormFields} />
    )
}

export default VoucherOutputItemFormFields

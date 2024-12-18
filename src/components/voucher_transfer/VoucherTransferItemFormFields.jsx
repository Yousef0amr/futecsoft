import React, { useEffect } from 'react'
import { voucherTransferItemsFormFields } from '../../config/formFields'
import FormFieldsComponent from '../common/FormFieldsComponent'
import { useLazyGetProductUnitsByIdQuery, useLazyGetStandardAndRawMaterialsQuery } from '../../features/productSlice'

const VoucherTransferItemFormFields = ({ errors, register, watch, setValue }) => {
    const [triggerGetProductUnitsById, { data: unitsData, isLoading: isLoadingUnits }] = useLazyGetProductUnitsByIdQuery();
    const [triggerGetStandardAndRawMaterials, { data: productsData, isLoading: isLoadingProducts }] = useLazyGetStandardAndRawMaterialsQuery();

    const units = !isLoadingUnits
        ? unitsData?.map((item) => ({ value: item.UnitId, label: item.UnitAr }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.Id, label: item.NameAr }))
        : [];

    useEffect(() => {
        if (watch('FromWarehouse')) {
            triggerGetStandardAndRawMaterials({ Warehouse: watch('FromWarehouse'), pageNumber: 1, pageSize: 10 });
        }


    }, []);

    useEffect(() => {
        if (watch('ItemID')) {
            triggerGetProductUnitsById(watch('ItemID'));
        }
    }, [triggerGetProductUnitsById, watch]);
    const onSelectChange = (value, name) => {
        if (name === 'FromWarehouse') {
            triggerGetStandardAndRawMaterials({ Warehouse: value, pageNumber: 1, pageSize: 10 });
        }
        if (name === 'ItemID') {
            triggerGetProductUnitsById(value);
        }
    };
    return (
        <FormFieldsComponent triggerEvent={onSelectChange} options={{
            ItemID: productsData ? products : [],
            Unit: unitsData ? units : []
        }} errors={errors} register={register} setValue={setValue} watch={watch} fields={voucherTransferItemsFormFields} />
    )
}

export default VoucherTransferItemFormFields

import React, { useEffect, useMemo, useState } from 'react'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../config/appStrings'
import useTableActions from '../../hooks/useTableActions'
import { useTranslation } from 'react-i18next'
import useEntityOperations from '../../hooks/useEntityOperations'
import FilterSearch from '../common/FilterSearch'
import FormCard from '../common/FormCard'
import { useInvoiceItemsManagement } from '../../hook/useInvoiceManagement'
import { defaultVoucherTypes } from '../../config/constants'
import ListEditComponent from '../common/ListEditComponent'
import InvoiceItemForm from './InvoiceItemForm';
import { useInvoicesItemsColDefs } from '../../config/agGridColConfig';
import TableWithCRUD from '../common/TableWithCRUD'
import { invoiceItemsGridColumns } from '../../config/formFields'
import { useGetProductUnitsByIdQuery, useGetStandardAndRawMaterialsQuery } from '../../features/productSlice'
const ListInvoiceItems = ({ invoice }) => {
    const [quickFilterText, setQuickFilterText] = useState();
    const { defaultActions, handleCancel, active } = useTableActions({ path: null });
    const { data, isLoading, addEntity, isAdding, isUpdating, updateEntity, deleteEntityFromCache, deleteEntity, isDeleting, refetch } = useInvoiceItemsManagement({ id: invoice.DocID });
    const { t } = useTranslation();
    const { handleEntityOperation } = useEntityOperations({ addEntity, updateEntity, deleteEntity });
    const isEditing = active.editable;

    const defaultValues = useMemo(() => ({
        ItemId: '',
        Unit: '',
        Qty: '',
        UnitPrice: '',
        ItemDiscountPercentage: 0,
        ItemDiscount: 0
    }), []);

    const [editData, setEditData] = useState(defaultValues);
    const { data: productsData, isLoading: isLoadingProducts } = useGetStandardAndRawMaterialsQuery(
        invoice.Warehouse ? {
            Warehouse: invoice.Warehouse,
            pageNumber: 1,
            pageSize: 100
        } : null,
        {
            skip: !invoice.Warehouse
        }
    );
    const { data: unitsData, isLoading: isLoadingUnits } = useGetProductUnitsByIdQuery(
        productsData ? productsData[0]?.Id : null
    );

    const units = !isLoadingUnits
        ? unitsData?.map((item) => ({ value: item.UnitId, label: item.UnitAr }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.Id, label: item.NameAr }))
        : [];

    useEffect(() => {
        if (isEditing) {
            setEditData({
                ItemId: active?.data?.ItemID,
                Unit: active?.data?.UnitID,
                Qty: active?.data?.Qty,
                UnitPrice: active?.data?.UnitPrice,
                ItemDiscountPercentage: active?.data?.DiscountPercentage,
                ItemDiscount: active?.data?.Discount,
            });
        } else {
            setEditData(defaultValues);
        }
    }, [isEditing, active, invoice, defaultValues]);

    const onSubmit = async (data) => {
        const operationType = isEditing ? "update" : "add";
        await handleEntityOperation({
            operation: operationType,
            data,
            cacheUpdater: refetch,
            successMessage: isEditing
                ? AppStrings.product_updated_successfully
                : AppStrings.product_added_successfully,
            errorMessage: isEditing
                ? AppStrings.something_went_wrong
                : AppStrings.material_already_added,
        });
    };

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { ItemId: active.data.ItemID, DocID: active.data.DocID, Warehouse: invoice.Warehouse, Unit: active.data.UnitID },
            cacheUpdater: deleteEntityFromCache(active.data.ItemID),
            successMessage: AppStrings.product_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };

    const handleAddClick = () => {
        handleCancel();
        localStorage.removeItem("selectedRows");
    }
    return (
        <FormCard open={active.isOpen} handleDelete={handleOnDeleteClick} handleCancel={handleCancel} isLoading={isDeleting}
            icon={faBarcode} title={t(AppStrings.list_products)} optionComponent={
                <>
                    <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                </>
            }>
            {/* <ListEditComponent Form={InvoiceItemForm} useColDefs={useInvoicesItemsColDefs} isEditing={isEditing} handleAddClick={handleAddClick} resetForm={isAdding} actionLoading={isEditing ? isUpdating : isAdding} onSubmit={onSubmit} data={data} isLoading={isLoading} actions={defaultActions} quickFilterText={quickFilterText} defaultValuesEdit={{
                ...editData,
                Vtype: defaultVoucherTypes.invoice,
                ...invoice
            }} /> */}

            <TableWithCRUD columns={
                useInvoicesItemsColDefs({ producs: products, units: units })} initialRows={data} />
        </FormCard>
    )
}

export default ListInvoiceItems
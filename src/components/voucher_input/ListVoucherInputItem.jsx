import React, { useState } from 'react'
import { defaultVoucherTypes } from '../../config/constants';
import useTableActions from '../../hooks/useTableActions';
import { useTranslation } from 'react-i18next';
import useEntityOperations from '../../hooks/useEntityOperations';
import { useMemo } from 'react';
import { useEffect } from 'react';
import AppStrings from '../../config/appStrings';
import FilterSearch from '../common/FilterSearch';
import FormCard from '../common/FormCard';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import ListEditComponent from '../common/ListEditComponent';
import VoucherInputItemForm from './VoucherInputItemForm';
import { useInvoicesItemsColDefs } from '../../config/agGridColConfig';
import { useVoucherInputItemsManagement } from '../../hook/useVoucherInputManagement';

const ListVoucherInputItem = ({ voucher }) => {
    const [quickFilterText, setQuickFilterText] = useState();
    const { defaultActions, handleCancel, active } = useTableActions({ path: null });
    const { data, isLoading, addEntity, isAdding, isUpdating, updateEntity, deleteEntityFromCache, deleteEntity, isDeleting, refetch } = useVoucherInputItemsManagement({ id: voucher.DocID });
    const { t } = useTranslation();
    const { handleEntityOperation } = useEntityOperations({ addEntity, updateEntity, deleteEntity });
    const isEditing = active.editable;

    const defaultValues = useMemo(() => ({
        ItemId: '',
        Unit: '',
        Qty: '',
        UnitPrice: '',
    }), []);

    const [editData, setEditData] = useState(defaultValues);

    useEffect(() => {
        if (isEditing) {
            setEditData({
                ItemId: active?.data?.ItemID,
                Unit: active?.data?.UnitID,
                Qty: active?.data?.Qty,
                UnitPrice: active?.data?.UnitPrice,
            });
        } else {
            setEditData(defaultValues);
        }
    }, [isEditing, active, voucher, defaultValues]);

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
            data: { ItemId: active.data.ItemID, DocID: active.data.DocID, Warehouse: voucher.Warehouse, Unit: active.data.UnitID },
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
            icon={faTruck} title={t(AppStrings.list_products)} optionComponent={
                <>
                    <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                </>
            }>
            <ListEditComponent Form={VoucherInputItemForm} useColDefs={useInvoicesItemsColDefs} isEditing={isEditing} handleAddClick={handleAddClick} resetForm={isAdding} actionLoading={isEditing ? isUpdating : isAdding} onSubmit={onSubmit} data={data} isLoading={isLoading} actions={defaultActions} quickFilterText={quickFilterText} defaultValuesEdit={{
                ...editData,
                Vtype: defaultVoucherTypes.inputVoucher,
                ...voucher
            }} />
        </FormCard>
    )
}

export default ListVoucherInputItem

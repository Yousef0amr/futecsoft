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
import VoucherOutputItemForm from './VoucherOutputItemForm';
import { useInvoicesItemsColDefs } from '../../config/agGridColConfig';
import { useVoucherOutputItemsManagement } from '../../hook/useVoucherOutputManagement';

const ListVoucherOutputItems = ({ voucher }) => {
    const [quickFilterText, setQuickFilterText] = useState();
    const { defaultActions, handleCancel, active } = useTableActions({ path: null });
    const { data, isLoading, addEntity, isAdding, isUpdating, updateEntity, deleteEntityFromCache, deleteEntity, isDeleting, refetch } = useVoucherOutputItemsManagement({ id: voucher.DocNo });
    const { t } = useTranslation();
    const { handleEntityOperation } = useEntityOperations({ addEntity, updateEntity, deleteEntity });
    const isEditing = active.editable;

    const defaultValues = useMemo(() => ({
        ItemId: '',
        Unit: '',
        Qty: '',
        Cost: '',
    }), []);

    const [editData, setEditData] = useState(defaultValues);

    useEffect(() => {
        if (isEditing) {
            setEditData({
                ItemId: active?.data?.ItemID,
                Unit: active?.data?.UnitID,
                Qty: active?.data?.Qty,
                Cost: active?.data?.Cost,
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
    console.log(voucher)
    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { ItemId: active.data.ItemID, DocNo: active.data.DocNo, Warehouse: voucher.Warehouse, Unit: active.data.UnitID },
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
            <ListEditComponent Form={VoucherOutputItemForm} useColDefs={useInvoicesItemsColDefs} isEditing={isEditing} handleAddClick={handleAddClick} resetForm={isAdding} actionLoading={isEditing ? isUpdating : isAdding} onSubmit={onSubmit} data={data} isLoading={isLoading} actions={defaultActions} quickFilterText={quickFilterText} defaultValuesEdit={{
                ...editData,
                DocType: defaultVoucherTypes.outputVoucher,
                ...voucher
            }} />
        </FormCard>
    )
}

export default ListVoucherOutputItems

import React from 'react'
import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../config/appStrings'
import useVoucherTransferManagement from '../../hook/useVoucherTransferManagement'
import useEntityOperations from '../../hooks/useEntityOperations'
import useTableActions from '../../hooks/useTableActions'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import FormCard from '../common/FormCard'
import FilterSearch from '../common/FilterSearch'
import ListEditComponent from '../common/ListEditComponent'
import VoucherTransferItemForm from './VoucherTransferItemForm'
import { useInvoicesItemsColDefs } from '../../config/agGridColConfig'


const ListVoucherTransferItem = ({ voucher }) => {
    const [quickFilterText, setQuickFilterText] = useState();
    const { defaultActions, handleCancel, active } = useTableActions({ path: null });
    const { data, isLoading, addEntity, isAdding, isUpdating, updateEntity, deleteEntityFromCache, deleteEntity, isDeleting, refetch } = useVoucherTransferManagement({ id: voucher.DocNo });
    const { t } = useTranslation();
    const { handleEntityOperation } = useEntityOperations({ addEntity, updateEntity, deleteEntity });
    const isEditing = active.editable;

    const defaultValues = useMemo(() => ({
        ItemID: '',
        Unit: '',
        Qty: '',
        Cost: '',
    }), []);

    const [editData, setEditData] = useState(defaultValues);

    useEffect(() => {
        if (isEditing) {
            setEditData({
                ItemID: active?.data?.ItemID,
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

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { ItemID: active.data.ItemID, DocNo: active.data.DocNo, Unit: active.data.UnitID },
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
            <ListEditComponent Form={VoucherTransferItemForm} useColDefs={useInvoicesItemsColDefs} isEditing={isEditing} handleAddClick={handleAddClick} resetForm={isAdding} actionLoading={isEditing ? isUpdating : isAdding} onSubmit={onSubmit} data={data} isLoading={isLoading} actions={defaultActions} quickFilterText={quickFilterText} defaultValuesEdit={{
                ...editData,
                ...voucher
            }} />
        </FormCard>
    )
}

export default ListVoucherTransferItem

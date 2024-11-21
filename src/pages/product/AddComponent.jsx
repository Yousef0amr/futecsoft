import React, { useEffect, useMemo } from 'react'
import CompositeComponents from '../../components/product/CompositeComponents'
import FormCard from '../../components/common/FormCard'
import { faArrowRight, faBarcode } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../utils/appStrings'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import FilterSearch from '../../components/common/FilterSearch'
import NavButton from '../../components/common/NavButton'
import { useLocation } from 'react-router-dom'
import useTableActions from '../../hooks/useTableActions'
import { routes } from '../../utils/constants'
import DeleteComponent from '../../components/common/DeleteComponent'
import useCompComponentsManagement from '../../hook/useCompComponentsManagement'
import useNotification from '../../hooks/useNotification'



const AddComponent = () => {
    const location = useLocation()
    const [quickFilterText, setQuickFilterText] = useState();
    const { defaultActions, handleCancel, active } = useTableActions({ path: null });
    const { data, isLoading, addEntity, isAdding, deleteEntity, isDeleting, isUpdating, updateEntity } = useCompComponentsManagement(location.state.Id || location.state.ItemId)
    const { t } = useTranslation();
    const { success, error } = useNotification();
    const isEditing = active.editable;

    const componentData = useMemo(() => ({
        ItemID: location.state.Id, Father: location.state.CatID, Name: location.state.NameAr, FoodQty: ''
    }), [location]);

    const [editData, setEditData] = useState();

    useEffect(() => {
        if (isEditing) {
            setEditData({
                SubItem: active?.data?.SubItem,
                Father: active?.data?.Father,
                Unit: active?.data?.Unit,
                Note: active?.data?.Note || '',
                FoodQty: active?.data?.FoodQty,
                ItemID: active?.data?.ItemId,
                Name: active?.data?.ItemArName
            });
        } else {
            setEditData(componentData);
        }
    }, [isEditing, active, location, componentData]);


    const onSubmit = async (data) => {
        try {
            const result = isEditing ? await updateEntity(data).unwrap() : await addEntity(data).unwrap();
            if (result.Success) {
                isEditing ? setEditData((prev) => ({ ...prev, FoodQty: data.FoodQty, Note: data.Note })) : setEditData(componentData);
                success(t(isEditing ? AppStrings.component_updated_successfully : AppStrings.component_added_successfully));
            } else {
                throw new Error(result.Success);
            }
        } catch (e) {
            error(t(isEditing ? AppStrings.update_just_quentity_or_note : AppStrings.material_already_added));
        }
    }

    const handleOnDeleteClick = async () => {
        try {
            const result = await deleteEntity({ ItemID: active.data.ItemId, SubItem: active.data.SubItem }).unwrap();
            if (result.Success) {
                success(t(AppStrings.component_deleted_successfully));
            } else {
                throw new Error(result.Success);
            }
        } catch (e) {
            error(t(AppStrings.something_went_wrong));
        } finally {
            handleCancel();
        }
    };

    const handleAddClick = () => {
        handleCancel();
        localStorage.removeItem("selectedRows");
    }

    return (
        <FormCard open={active.isOpen}
            modelComponent={
                <DeleteComponent
                    handleCancel={handleCancel}
                    handleDelete={handleOnDeleteClick}
                    isLoading={isDeleting}
                />
            } icon={faBarcode} title={t(AppStrings.list_components)} navButton={<NavButton icon={faArrowRight} title={AppStrings.back} path={routes.product.compositeComponents} />} optionComponent={
                <>
                    <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                </>
            }>
            <CompositeComponents isEditing={isEditing} handleAddClick={handleAddClick} resetForm={isAdding} actionLoading={isEditing ? isUpdating : isAdding} onSubmit={onSubmit} data={data} isLoading={isLoading} actions={defaultActions} quickFilterText={quickFilterText} defaultValuesEdit={editData} />
        </FormCard>
    )
}

export default AddComponent

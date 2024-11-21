import React from 'react'
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

    const onSubmit = async (data) => {
        try {
            const result = await addEntity(data).unwrap();
            if (result.Success) {

                success(t(AppStrings.component_added_successfully));
            } else {
                throw new Error(result.Success);
            }
        } catch (e) {
            error(t(AppStrings.material_already_added));
        }
    }

    const handleOnDeleteClick = async () => {
        try {
            const result = await deleteEntity({ ItemID: active.data.ItemId, SubItem: active.data.SubItem }).unwrap();
            if (result.Success) {

                success(t(AppStrings.product_deleted_successfully));
            } else {
                throw new Error(result.Success);
            }
        } catch (e) {
            error(t(AppStrings.something_went_wrong));
        } finally {
            handleCancel();
        }
    };


    // export const productComponentsFormFields = [
    //     { name: 'ItemID', label: AppStrings.productId, required: true },
    //     { name: 'Name', label: AppStrings.description, required: false },
    //     { name: 'FoodQty', label: AppStrings.quantity, required: true, type: 'number' },
    //     { name: 'Note', label: AppStrings.note, required: false },
    // ];


    // export const productComponentsFormFields1 = [
    //     { name: 'Father', label: AppStrings.category, required: true, options: [] },
    //     { name: 'SubItem', label: AppStrings.materials, required: true, options: [] },
    //     { name: 'Unit', label: AppStrings.unit, required: true, options: [] },
    // ];

    const componentData = {
        // ItemId: location.state.Id || location.state.ItemId,
        // SubItem: location.state.SubItem, 

    }

    console.log(active)
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
            <CompositeComponents actionLoading={isAdding} onSubmit={onSubmit} data={data} isLoading={isLoading} actions={defaultActions} quickFilterText={quickFilterText} defaultValuesEdit={location.state} />
        </FormCard>
    )
}

export default AddComponent

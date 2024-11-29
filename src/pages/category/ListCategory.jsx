import React, { useState } from 'react'
import useCategoryManagement from '../../hook/useCategoryManagement';
import { useCategoriesColDefs } from '../../config/agGridColConfig';
import useTableActions from '../../hooks/useTableActions';
import { routes } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import useEntityOperations from '../../hooks/useEntityOperations';
import AppStrings from '../../utils/appStrings';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';

const ListCategory = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useCategoryManagement();
    const categoryCols = useCategoriesColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.category.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });




    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { Id: active.data.Id },
            cacheUpdater: deleteEntityFromCache(active.data.Id),
            successMessage: AppStrings.category_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };
    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faWindowRestore} title={t(AppStrings.list_categories)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_category} path={routes.category.add} />
            </>
        }>
            <AgGridTable actions={defaultActions} dynamicColumns={categoryCols} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
        </FormCard>
    )
}

export default ListCategory

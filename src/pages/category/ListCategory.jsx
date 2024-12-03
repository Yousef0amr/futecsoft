import React from 'react'
import useCategoryManagement from '../../hook/useCategoryManagement';
import { useCategoriesColDefs } from '../../config/agGridColConfig';
import { routes } from '../../utils/constants';
import AppStrings from '../../utils/appStrings';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import ListComponent from '../../components/common/ListComponent';

const ListCategory = () => {
    return (
        <ListComponent
            entityName="category"
            entityKey="Id"
            fetchHook={useCategoryManagement}
            columnDefsHook={useCategoriesColDefs}
            routes={routes.category}
            icon={faWindowRestore}
            deleteSuccessMessage={AppStrings.category_deleted_successfully}
            deleteErrorMessage={AppStrings.something_went_wrong}
            formTitle={AppStrings.list_categories}
            addButtonTitle={AppStrings.add_new_category}
        />
    )
}

export default ListCategory

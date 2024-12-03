import React from 'react'
import { useFlavorsColDefs } from '../../config/agGridColConfig';
import { routes } from '../../utils/constants';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AppStrings from '../../utils/appStrings';
import useFlavorManagement from '../../hook/useFlavorManagement';
import ListComponent from '../../components/common/ListComponent';


const ListFlavor = () => {
    return (
        <ListComponent
            entityName="flavor"
            entityKey="FlavorNo"
            fetchHook={useFlavorManagement}
            columnDefsHook={useFlavorsColDefs}
            routes={routes.flavor}
            icon={faHeart}
            deleteSuccessMessage={AppStrings.flavor_deleted_successfully}
            deleteErrorMessage={AppStrings.something_went_wrong}
            formTitle={AppStrings.list_flavors}
            addButtonTitle={AppStrings.add_new_flavor}
        />
    )
}

export default ListFlavor

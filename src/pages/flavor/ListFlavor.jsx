import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useFlavorsColDefs } from '../../config/agGridColConfig';
import useEntityOperations from '../../hooks/useEntityOperations';
import useTableActions from '../../hooks/useTableActions';
import { routes } from '../../utils/constants';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AppStrings from '../../utils/appStrings';
import NavButton from '../../components/common/NavButton';
import FilterSearch from '../../components/common/FilterSearch';
import FormCard from '../../components/common/FormCard';
import AgGridTable from '../../components/common/AgGridTable';
import useFlavorManagement from '../../hook/useFlavorManagement';


const ListFlavor = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useFlavorManagement();
    const flavorCols = useFlavorsColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.flavor.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { FlavorNo: active.data.FlavorNo },
            cacheUpdater: deleteEntityFromCache(active.data.FlavorNo),
            successMessage: AppStrings.flavor_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };
    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faHeart} title={t(AppStrings.list_flavors)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_flavor} path={routes.flavor.add} />
            </>
        }>
            <div className='w-100 p-1 mt-4'>
                <AgGridTable actions={defaultActions} dynamicColumns={flavorCols} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
            </div>
        </FormCard>
    )
}

export default ListFlavor

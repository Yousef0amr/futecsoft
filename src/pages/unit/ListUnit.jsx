import React, { useState } from 'react'
import useUnitManagement from '../../hook/useUnitManagement';
import { routes } from '../../utils/constants';
import useTableActions from '../../hooks/useTableActions';
import useEntityOperations from '../../hooks/useEntityOperations';
import { useUnitsColDefs } from '../../config/agGridColConfig';
import FormCard from '../../components/common/FormCard';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import AgGridTable from '../../components/common/AgGridTable';
import AppStrings from '../../utils/appStrings';
import { useTranslation } from 'react-i18next';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';

const ListUnit = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useUnitManagement();
    const unitCols = useUnitsColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.unit.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });




    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { UnitId: active.data.UnitID },
            cacheUpdater: deleteEntityFromCache(active.data.UnitID),
            successMessage: AppStrings.unit_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };
    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faBalanceScale} title={t(AppStrings.list_units)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_unit} path={routes.unit.add} />
            </>
        }>
            <div className='w-100 p-1 mt-4'>
                <AgGridTable actions={defaultActions} dynamicColumns={unitCols} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
            </div>
        </FormCard>
    )
}

export default ListUnit

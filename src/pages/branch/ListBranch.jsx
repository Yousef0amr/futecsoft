import React, { useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faShuffle } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import { useBranchColDefs } from '../../config/agGridColConfig';
import useBranchManagement from '../../hook/useBranchManagement';
import { routes } from '../../utils/constants';
import useTableActions from '../../hooks/useTableActions';
import useEntityOperations from '../../hooks/useEntityOperations';


const ListBranch = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useBranchManagement();
    const branchColDefs = useBranchColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.branch.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });


    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { BranchId: active.data.BranchId },
            cacheUpdater: deleteEntityFromCache(active.data.BranchId),
            successMessage: AppStrings.branch_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };

    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faShuffle} title={t(AppStrings.list_branches)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={faAdd} title={AppStrings.add_new_branch} path={routes.branch.add} />
            </>
        }>
            <AgGridTable actions={defaultActions} dynamicColumns={branchColDefs} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
        </FormCard>
    );
};

export default ListBranch;

import React, { useCallback, useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { useGetBranchesQuery } from '../../features/branchesSlice';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faShuffle } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import BranchForm from '../../components/branch/BranchForm';
import { useBranchColDefs } from '../../config/agGridColConfig';


const ListBranches = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading } = useGetBranchesQuery({ pageNumber: 1, pageSize: 1 });
    const branchColDefs = useBranchColDefs();




    return (
        <FormCard icon={faShuffle} title={t(AppStrings.list_branches)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={faAdd} title={AppStrings.add_new_branch} path={'/branches/add'} />
            </>
        }>
            <div className='w-100 p-1 mt-4'>
                <AgGridTable EditForm={BranchForm} dynamicColumns={branchColDefs} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
            </div>
        </FormCard>
    );
};

export default ListBranches;

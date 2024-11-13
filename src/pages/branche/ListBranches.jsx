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


const ListBranches = () => {
    const { t } = useTranslation();
    const { data, isLoading } = useGetBranchesQuery({ pageNumber: 1, pageSize: 1 });


    const colDefs = [
        { field: "BranchId", headerName: t(AppStrings.branchId), filter: 'agNumberColumnFilter' },
        { field: "BranchNameAr", headerName: t(AppStrings.branchNameAr), filter: 'agTextColumnFilter' },
        { field: "BranchNameEn", headerName: t(AppStrings.branchNameEn), filter: 'agTextColumnFilter' },
        { field: "TaxId", headerName: t(AppStrings.taxId), filter: 'agNumberColumnFilter' },
        { field: "Phones", headerName: t(AppStrings.phones), filter: 'agNumberColumnFilter' },
        { field: "Mobiles", headerName: t(AppStrings.mobiles), filter: 'agNumberColumnFilter' },
        { field: "Website", headerName: t(AppStrings.website), filter: 'agTextColumnFilter' },
        { field: "Email", headerName: t(AppStrings.email), filter: 'agTextColumnFilter' },
        { field: "Address", headerName: t(AppStrings.address), filter: 'agTextColumnFilter' },
        { field: "City", headerName: t(AppStrings.city), filter: 'agTextColumnFilter' },
        { field: "Street", headerName: t(AppStrings.street), filter: 'agTextColumnFilter' },
    ];


    const [quickFilterText, setQuickFilterText] = useState();

    const onFilterTextBoxChanged = useCallback(
        ({ target: { value } }) =>
            setQuickFilterText(value),
        []
    );

    return (
        <FormCard icon={faShuffle} title={t(AppStrings.list_branches)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={onFilterTextBoxChanged} />
                <NavButton icon={faAdd} title={AppStrings.add_new_branch} path={'/branches/add'} />
            </>
        }>
            <div className='w-100 p-1 mt-4'>
                <AgGridTable EditForm={BranchForm} dynamicColumns={colDefs} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
            </div>

        </FormCard>
    );
};

export default ListBranches;

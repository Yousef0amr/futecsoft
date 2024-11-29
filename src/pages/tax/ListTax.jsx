import React from 'react'
import AppStrings from '../../utils/appStrings';
import { routes } from '../../utils/constants';
import { faUsd } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import useTaxManagement from '../../hook/useTaxManagement';
import useTableActions from '../../hooks/useTableActions';
import useEntityOperations from '../../hooks/useEntityOperations';

import { useTaxsColDefs } from '../../config/agGridColConfig';

import { useState } from 'react';
import FormCard from '../../components/common/FormCard';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import AgGridTable from '../../components/common/AgGridTable';

const ListTax = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useTaxManagement();
    const taxColDefs = useTaxsColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.tax.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });


    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { TaxId: active.data.TaxId },
            cacheUpdater: deleteEntityFromCache(active.data.TaxId),
            successMessage: AppStrings.tax_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };

    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faUsd} title={t(AppStrings.list_taxes)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_tax} path={routes.tax.add} />
            </>
        }>
            <AgGridTable actions={defaultActions} dynamicColumns={taxColDefs} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
        </FormCard>
    );
}

export default ListTax

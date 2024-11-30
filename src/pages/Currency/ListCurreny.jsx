import React from 'react'
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import useCurrencyManagment from '../../hook/useCurrencyManagment';
import useTableActions from '../../hooks/useTableActions';
import useEntityOperations from '../../hooks/useEntityOperations';
import FormCard from '../../components/common/FormCard';
import { useCurrenciesColDefs } from '../../config/agGridColConfig';
import AgGridTable from '../../components/common/AgGridTable';
import { useState } from 'react';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import { routes } from '../../utils/constants';


const ListCurreny = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useCurrencyManagment();
    const currencyCols = useCurrenciesColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.currency.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { CurrencyId: active.data.CurrencyId },
            cacheUpdater: deleteEntityFromCache(active.data.CurrencyId),
            successMessage: AppStrings.discount_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };
    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faMoneyBill} title={t(AppStrings.list_discounts)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_currency} path={routes.currency.add} />
            </>
        }>
            <AgGridTable actions={defaultActions} dynamicColumns={currencyCols} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
        </FormCard>
    )
}

export default ListCurreny
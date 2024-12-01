import React from 'react'
import { useTranslation } from 'react-i18next'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import usePaymentTypeManagement from '../../hook/usePaymentTypeManagement'
import { usePaymentTypesColDefs } from '../../config/agGridColConfig'
import useTableActions from '../../hooks/useTableActions'
import useEntityOperations from '../../hooks/useEntityOperations'
import { routes } from '../../utils/constants'
import FormCard from '../../components/common/FormCard'
import AgGridTable from '../../components/common/AgGridTable'
import FilterSearch from '../../components/common/FilterSearch'
import { useState } from 'react'
import AppStrings from '../../utils/appStrings'
import NavButton from '../../components/common/NavButton'

const ListPaymentType = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = usePaymentTypeManagement();
    const paymentTypeColDefs = usePaymentTypesColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.paymentMethod.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { Ptype: active.data.Ptype },
            cacheUpdater: deleteEntityFromCache(active.data.Ptype),
            successMessage: AppStrings.paymentType_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };

    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faCreditCard} title={t(AppStrings.list_paymentTypes)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_paymentType} path={routes.paymentMethod.add} />
            </>
        }>
            <AgGridTable actions={defaultActions} dynamicColumns={paymentTypeColDefs} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
        </FormCard>
    );
}

export default ListPaymentType

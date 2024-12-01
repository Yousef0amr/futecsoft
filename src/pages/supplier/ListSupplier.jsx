import React from 'react'
import { useTranslation } from 'react-i18next'
import { faVcard } from '@fortawesome/free-solid-svg-icons'
import useSupplierManagement from '../../hook/useSupplierManagement'
import { useSuppliersColDefs } from '../../config/agGridColConfig'
import useTableActions from '../../hooks/useTableActions'
import useEntityOperations from '../../hooks/useEntityOperations'
import { routes } from '../../utils/constants'
import FormCard from '../../components/common/FormCard'
import AgGridTable from '../../components/common/AgGridTable'
import FilterSearch from '../../components/common/FilterSearch'
import { useState } from 'react'
import AppStrings from '../../utils/appStrings'
import NavButton from '../../components/common/NavButton'

const ListSupplier = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useSupplierManagement();
    const supplierColDefs = useSuppliersColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.supplier.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { SupplierId: active.data.SupplierId },
            cacheUpdater: deleteEntityFromCache(active.data.SupplierId),
            successMessage: AppStrings.supplier_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };

    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faVcard} title={t(AppStrings.list_suppliers)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_supplier} path={routes.supplier.add} />
            </>
        }>
            <AgGridTable actions={defaultActions} dynamicColumns={supplierColDefs} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
        </FormCard>
    );
}

export default ListSupplier

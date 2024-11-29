import React from 'react'
import AppStrings from '../../utils/appStrings';
import { useDiscountsColDefs } from '../../config/agGridColConfig';
import { routes } from '../../utils/constants';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import FormCard from '../../components/common/FormCard';
import AgGridTable from '../../components/common/AgGridTable';
import { useState } from 'react';
import useDiscountManagement from '../../hook/useDiscountManagement';
import useEntityOperations from '../../hooks/useEntityOperations';
import useTableActions from '../../hooks/useTableActions';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';

const ListDiscount = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useDiscountManagement();
    const discountCols = useDiscountsColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.discountType.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { Serial: active.data.Serial },
            cacheUpdater: deleteEntityFromCache(active.data.Serial),
            successMessage: AppStrings.discount_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };
    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faPercent} title={t(AppStrings.list_discounts)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_discount} path={routes.discountType.add} />
            </>
        }>
            <AgGridTable actions={defaultActions} dynamicColumns={discountCols} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
        </FormCard>
    )
}

export default ListDiscount

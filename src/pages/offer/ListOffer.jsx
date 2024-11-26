import React, { useState } from 'react'
import useOfferManagement from '../../hook/useOfferManagement';
import { useTranslation } from 'react-i18next';
import { useOffersColDefs } from '../../config/agGridColConfig';
import AgGridTable from '../../components/common/AgGridTable';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import AppStrings from '../../utils/appStrings';
import { routes } from '../../utils/constants';
import FormCard from '../../components/common/FormCard';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import useEntityOperations from '../../hooks/useEntityOperations';
import useTableActions from '../../hooks/useTableActions';

const ListOffer = () => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useOfferManagement();
    const offerCols = useOffersColDefs();
    const { active, handleCancel, defaultActions } = useTableActions({ path: routes.offer.edit });
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { OfferId: active.data.OfferId },
            cacheUpdater: deleteEntityFromCache(active.data.OfferId),
            successMessage: AppStrings.offer_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };
    return (
        <FormCard open={active.isOpen} handleCancel={handleCancel} isLoading={isDeleting} handleDelete={handleOnDeleteClick} icon={faStar} title={t(AppStrings.list_offers)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                <NavButton icon={'add'} title={AppStrings.add_new_offer} path={routes.offer.add} />
            </>
        }>
            <div className='w-100 p-1 mt-4'>
                <AgGridTable actions={defaultActions} dynamicColumns={offerCols} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
            </div>
        </FormCard>
    )
}

export default ListOffer

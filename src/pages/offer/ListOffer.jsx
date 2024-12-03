import React from 'react'
import useOfferManagement from '../../hook/useOfferManagement';
import { useOffersColDefs } from '../../config/agGridColConfig';
import AppStrings from '../../utils/appStrings';
import { routes } from '../../utils/constants';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ListComponent from '../../components/common/ListComponent';


const ListOffer = () => {
    return (
        <ListComponent
            entityName="flavor"
            entityKey="OfferId"
            fetchHook={useOfferManagement}
            columnDefsHook={useOffersColDefs}
            routes={routes.offer}
            icon={faStar}
            deleteSuccessMessage={AppStrings.offer_deleted_successfully}
            deleteErrorMessage={AppStrings.something_went_wrong}
            formTitle={AppStrings.list_offers}
            addButtonTitle={AppStrings.add_new_offer}
        />
    )
}

export default ListOffer

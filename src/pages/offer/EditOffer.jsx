import React, { useState } from 'react'
import useOfferManagement from '../../hook/useOfferManagement';
import useEntityOperations from '../../hooks/useEntityOperations';
import AppStrings from '../../utils/appStrings';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import EditComponent from '../../components/common/EditComponent';
import { offerTypeFormFields, routes } from '../../utils/constants';
import OfferForm from '../../components/offer/OfferForm';
import { useTranslation } from 'react-i18next';
import TabsSelect from '../../components/common/TabsSelect';

const EditOffer = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = useOfferManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })
    const [activeTab, setActiveTab] = useState(loaction.state.OfferTypeEn.replace(/\s+/g, ''));

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.offer_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    const offerType = activeTab === 'PriceOffer' ? {
        PriceOffer: true,
        QtyOffer: false,
        ExtraOffer: false
    } : activeTab === 'QtyOffer' ? {
        PriceOffer: false,
        QtyOffer: true,
        ExtraOffer: false
    } : {
        PriceOffer: false,
        QtyOffer: false,
        ExtraOffer: true
    };
    const handleTabClick = (type) => {
        setActiveTab(type);
    };

    return (
        <EditComponent optionComponent={<TabsSelect handleTabClick={handleTabClick} activeTab={activeTab} options={offerTypeFormFields} />} icon={faStar} title={t(AppStrings.edit_offer) + '  | ' + loaction.state.OfferId} path={routes.offer.list} >
            <OfferForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={{ ...loaction.state, Product: loaction.state.ProductId, ...offerType }} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditOffer
import React from 'react'
import FormCard from '../../components/common/FormCard'
import NavButton from '../../components/common/NavButton'
import OfferForm from '../../components/offer/OfferForm'
import useOfferManagement from '../../hook/useOfferManagement'
import { useGetCurrentOfferKeyQuery } from '../../features/offerSlice'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../utils/appStrings'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { routes } from '../../utils/constants'
import useEntityOperations from '../../hooks/useEntityOperations'

const AddOffer = () => {
    const { t } = useTranslation();
    const { addEntity, isAdding, addEntityToCache } = useOfferManagement();
    const { handleEntityOperation } = useEntityOperations({ addEntity });
    const { data: currentKey } = useGetCurrentOfferKeyQuery();

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'add',
            data,
            cacheUpdater: addEntityToCache({
                ...data,
                TagDesc: data.WareHouse
            }),
            successMessage: AppStrings.offer_added_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }
    return (
        <FormCard icon={faStar} title={t(AppStrings.add_new_offer)} optionComponent={
            <>
                <NavButton icon={'list'} title={AppStrings.list_offers} path={routes.offer.list} />
            </>
        }  >
            <OfferForm isLoading={isAdding} resetForm={!isAdding} onSubmit={onSubmit} defaultValuesEdit={{ OfferId: currentKey, IsActive: true }} />
        </FormCard>
    )
}

export default AddOffer

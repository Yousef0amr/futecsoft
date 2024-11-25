import React from 'react'
import useFlavorManagement from '../../hook/useFlavorManagement';
import useEntityOperations from '../../hooks/useEntityOperations';
import { routes } from '../../utils/constants';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AppStrings from '../../utils/appStrings';
import NavButton from '../../components/common/NavButton';
import FormCard from '../../components/common/FormCard';
import { useGetCurrentFlavorKeyQuery } from '../../features/flavorsSlice';
import { useTranslation } from 'react-i18next';
import FlavorForm from '../../components/flavor/FlavorForm';

const AddFlavor = () => {
    const { t } = useTranslation();
    const { addEntity, isAdding, addEntityToCache } = useFlavorManagement();
    const { handleEntityOperation } = useEntityOperations({ addEntity });
    const { data: currentKey } = useGetCurrentFlavorKeyQuery();

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'add',
            data,
            cacheUpdater: addEntityToCache(data),
            successMessage: AppStrings.flavor_added_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }
    return (
        <FormCard icon={faHeart} title={t(AppStrings.add_new_flavor)} optionComponent={
            <>
                <NavButton icon={'list'} title={AppStrings.list_flavors} path={routes.flavor.list} />
            </>
        }  >
            <FlavorForm isLoading={isAdding} resetForm={!isAdding} onSubmit={onSubmit} defaultValuesEdit={{ FlavorNo: currentKey, IsActive: true }} />
        </FormCard>
    )
}

export default AddFlavor

import React from 'react'
import AppStrings from '../../utils/appStrings';
import { useTranslation } from 'react-i18next';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import FormCard from './FormCard';
import NavButton from './NavButton';
import { useEntityOperations } from '../../hooks/useEntityOperations';
import { routes } from '../../utils/constants';

const AddComponent = ({ useManagement, useGetCurrentKey, successMessage, }) => {
    const { t } = useTranslation();
    const { addEntity, isAdding, addEntityToCache } = useManagement();
    const { handleEntityOperation } = useEntityOperations({ addEntity });
    const { data: currentKey } = useGetCurrentKey();

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'add',
            data,
            cacheUpdater: addEntityToCache({
                ...data,
                TagDesc: data.WareHouse
            }),
            successMessage: successMessage,
            errorMessage: AppStrings.something_went_wrong
        })
    }
    return (
        <FormCard icon={faHeart} title={t(AppStrings.add_new_flavor)} optionComponent={
            <>
                <NavButton icon={'list'} title={AppStrings.list_flavors} path={routes.flavor.list} />
            </>
        }  >
            {null}
        </FormCard>
    )
}

export default AddComponent

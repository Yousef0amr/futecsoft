import React from 'react'
import EditComponent from '../../components/common/EditComponent';
import FlavorForm from '../../components/flavor/FlavorForm';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useFlavorManagement from '../../hook/useFlavorManagement';
import useEntityOperations from '../../hooks/useEntityOperations';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import AppStrings from '../../utils/appStrings';
import { routes } from '../../utils/constants';

const EditFlavor = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = useFlavorManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.flavor_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faHeart} title={t(AppStrings.edit_flavor) + '  | ' + loaction.state.FlavorNo} path={routes.flavor.list} >
            <FlavorForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={loaction.state} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditFlavor

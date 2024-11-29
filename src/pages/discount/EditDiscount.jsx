import React from 'react'
import useDiscountManagement from '../../hook/useDiscountManagement';
import AppStrings from '../../utils/appStrings';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { routes } from '../../utils/constants';
import EditComponent from '../../components/common/EditComponent';
import DiscountForm from '../../components/discount/DiscountForm';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import useEntityOperations from '../../hooks/useEntityOperations';

const EditDiscount = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = useDiscountManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.discount_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faPercent} title={t(AppStrings.edit_discount) + '  | ' + loaction.state.Serial} path={routes.discountType.list} >
            <DiscountForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={loaction.state} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditDiscount

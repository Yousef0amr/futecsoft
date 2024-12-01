import React from 'react'
import { useTranslation } from 'react-i18next'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import FormCard from '../../components/common/FormCard';
import PaymentTypeForm from './../../components/payment_type/PaymentTypeForm';
import usePaymentTypeManagement from '../../hook/usePaymentTypeManagement';
import useEntityOperations from '../../hooks/useEntityOperations';
import { useGetCurrentPaymentTypeKeyQuery } from '../../features/paymentTypeSlice';
import { routes } from '../../utils/constants';
import AppStrings from '../../utils/appStrings';
import NavButton from '../../components/common/NavButton';


const AddPaymentType = () => {
    const { t } = useTranslation();
    const { addEntity, isAdding, refetch } = usePaymentTypeManagement();
    const { handleEntityOperation } = useEntityOperations({ addEntity });
    const { data: currentKey } = useGetCurrentPaymentTypeKeyQuery();

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'add',
            data,
            cacheUpdater: refetch,
            successMessage: AppStrings.paymentType_added_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }
    return (
        <FormCard icon={faCreditCard} title={t(AppStrings.add_new_paymentType)} optionComponent={
            <>
                <NavButton icon={'list'} title={AppStrings.list_paymentTypes} path={routes.paymentMethod.list} />
            </>
        }  >
            <PaymentTypeForm isLoading={isAdding} resetForm={!isAdding} onSubmit={onSubmit} defaultValuesEdit={{ Ptype: currentKey, IsActive: true }} />
        </FormCard>
    )
}

export default AddPaymentType

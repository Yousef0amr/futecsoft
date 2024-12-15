import React from 'react'
import useInvoiceManagement from '../../hook/useInvoiceManagement';
import { useTranslation } from 'react-i18next';

import AppStrings from '../../config/appStrings';
import NavButton from '../../components/common/NavButton';
import FormCard from '../../components/common/FormCard';
import InvoiceInfoForm from '../../components/invoice/InvoiceInfoForm';
import { defaultInvoiceItem, defaultVoucherTypes, routes } from '../../config/constants';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import useEntityOperations from '../../hooks/useEntityOperations';
import { useGetCurrentInvoiceKeyQuery } from '../../features/invoiceSlice';

const AddInvoice = () => {
    const { t } = useTranslation();
    const { addEntity, isAdding, refetch } = useInvoiceManagement();
    const { handleEntityOperation } = useEntityOperations({ addEntity });
    const { data: currentKey } = useGetCurrentInvoiceKeyQuery();

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'add',
            data,
            cacheUpdater: refetch,
            successMessage: AppStrings.invoice_added_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }
    return (
        <FormCard icon={faFileInvoice} title={t(AppStrings.add_new_invoice)} optionComponent={
            <>
                <NavButton icon={'list'} title={AppStrings.list_invoices} path={routes.invoice.list} />
            </>
        }  >
            <InvoiceInfoForm isAdd={true} isLoading={isAdding} resetForm={!isAdding} onSubmit={onSubmit} defaultValuesEdit={{ DocID: currentKey, DocDate: new Date().toISOString().split("T")[0], Vtype: defaultVoucherTypes.invoice, ...defaultInvoiceItem }} />
        </FormCard>
    )
}

export default AddInvoice

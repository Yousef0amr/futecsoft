import React from 'react'
import useBranchManagement from '../../hook/useBranchManagement';
import AppStrings from '../../config/appStrings';
import ListReport from './../../components/report/ListReport';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import {
    useLazyGetInvoicesByDateQuery
} from '../../features/reportsControllerSlice';
import { reportFormFields } from '../../config/formFields';
import { useInvoicesByDateColDefs } from '../../config/agGridColConfig';
import useValidators from '../../hooks/useValidators';


const InvoicesByDate = () => {
    const { data: branchesData, isLoading: isLoadingBranches } = useBranchManagement();
    const [getInvoicesByDate, { data, isLoading }] = useLazyGetInvoicesByDateQuery();
    const { invoiceByDateSchema } = useValidators()


    const branches = !isLoadingBranches
        ? branchesData.map((item) => ({ value: item.BranchId, label: item.BranchNameAr }))
        : [];


    const onSubmit = async (data) => {
        await getInvoicesByDate(data);
    }

    return (
        <ListReport title={AppStrings.invoices_by_date} icon={faMoneyBill1Wave} data={data} fields={reportFormFields} schema={invoiceByDateSchema} options={{ Warehouse: branches ? branches : [] }} onSubmit={onSubmit} isLoading={isLoading} useComponentsColDefs={useInvoicesByDateColDefs()} />
    )
}

export default InvoicesByDate

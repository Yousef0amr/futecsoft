import React, { useMemo } from 'react'
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
import { Stack } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


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

    const calculateInvoiceSummary = useMemo(() => (invoices = []) => {
        return invoices?.reduce(
            (summary, invoice) => {
                summary.totalDiscount += invoice.InvoiceDiscountTotal || 0;
                summary.totalGrandTotal += invoice.InvoiceGrandTotal || 0;
                summary.totalSubTotal += invoice.InvoiceSubTotal || 0;
                summary.totalTaxTotal += invoice.InvoiceTaxTotal || 0;
                summary.invoiceCount += 1;
                return summary;
            },
            {
                invoiceCount: 0,
                totalSubTotal: 0,
                totalDiscount: 0,
                totalTaxTotal: 0,
                totalGrandTotal: 0,
            }
        );
    }, []);




    return (
        <ListReport summary={
            calculateInvoiceSummary(data)
        }
            title={AppStrings.invoices_by_date}
            icon={faMoneyBill1Wave}
            data={data}
            fields={reportFormFields}
            schema={invoiceByDateSchema}
            options={{ Warehouse: branches ? branches : [] }}
            onSubmit={onSubmit} isLoading={isLoading}
            useComponentsColDefs={useInvoicesByDateColDefs()} />
    )
}

export default InvoicesByDate

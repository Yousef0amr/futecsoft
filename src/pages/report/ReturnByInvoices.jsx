import React, { useMemo } from 'react'
import AppStrings from '../../config/appStrings';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { useLazyGetReturnByInvoicesQuery } from '../../features/reportsControllerSlice';
import useValidators from '../../hooks/useValidators';
import useBranchManagement from '../../hook/useBranchManagement';
import usePaymentTypeManagement from '../../hook/usePaymentTypeManagement';
import ListReport from '../../components/report/ListReport';
import { useGetAllPosStationsQuery } from '../../features/posStationSlice';
import { getReturnByInvoiceReportFormFields } from '../../config/formFields';
import { useSalesCategoryColDefs } from '../../config/agGridColConfig';

const ReturnByInvoices = () => {
    const { data: branchesData, isLoading: isLoadingBranches } = useBranchManagement();
    const { data: posStationsData, isLoading: isLoadingPosStations } = useGetAllPosStationsQuery();
    const { data: paymentTypesData, isLoading: isLoadingPaymentTypes } = usePaymentTypeManagement();
    const [getReturnByInvoices, { data, isLoading }] = useLazyGetReturnByInvoicesQuery();
    const { returnByInvoiceSchema } = useValidators()


    const branches = !isLoadingBranches
        ? branchesData.map((item) => ({ value: item.BranchId, label: item.BranchNameAr }))
        : [];

    let posStations = !isLoadingPosStations
        ? posStationsData.map((item) => ({ value: item.StationId, label: item.StationName }))
        : [];

    let paymentTypes = !isLoadingPaymentTypes
        ? paymentTypesData.map((item) => ({ value: item.Ptype, label: item.PaymentArDesc }))
        : [];

    const onSubmit = async (data) => {
        await getReturnByInvoices(data).unwrap();
    }


    const calculateInvoiceSummary = useMemo(() => (invoices = []) => {

        // return invoices?.reduce(
        //     (summary, invoice) => {
        //         summary.totalDiscount += invoice.DiscountV || 0;
        //         summary.totalGrandTotal += invoice.GrandTotal || 0;
        //         summary.totalSubTotal += invoice.Subtotal || 0;
        //         summary.totalTaxTotal += invoice.TaxV || 0;
        //         summary.invoiceCount += 1;
        //         return summary;
        //     },
        //     {
        //         invoiceCount: 0,
        //         totalSubTotal: 0,
        //         totalDiscount: 0,
        //         totalTaxTotal: 0,
        //         totalGrandTotal: 0,
        //     }
        // );
    }, []);


    return (
        <ListReport summary={
            calculateInvoiceSummary(data)
        }
            title={AppStrings.return_invoices}
            icon={faReceipt}
            data={data}
            fields={getReturnByInvoiceReportFormFields}
            schema={returnByInvoiceSchema}
            options={{ Warehouse: branches ? branches : [], StationID: posStations ? posStations : [], PayType: paymentTypes ? paymentTypes : [] }}
            onSubmit={onSubmit} isLoading={isLoading}
            useComponentsColDefs={useSalesCategoryColDefs()} />

    )
}

export default ReturnByInvoices

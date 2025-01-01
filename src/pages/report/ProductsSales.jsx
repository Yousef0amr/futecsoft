import React, { useMemo } from 'react'
import AppStrings from '../../config/appStrings';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useLazyGetSalesItemsQuery } from '../../features/reportsControllerSlice';
import useValidators from '../../hooks/useValidators';
import useBranchManagement from '../../hook/useBranchManagement';
import ListReport from '../../components/report/ListReport';
import { useGetAllPosStationsQuery } from '../../features/posStationSlice';
import { getFullSalesReportFormFields } from '../../config/formFields';
import { useSalesCategoryColDefs } from '../../config/agGridColConfig';

const ProductsSales = () => {
    const { data: branchesData, isLoading: isLoadingBranches } = useBranchManagement();
    const { data: posStationsData, isLoading: isLoadingPosStations } = useGetAllPosStationsQuery();
    const [getSalesItems, { data, isLoading }] = useLazyGetSalesItemsQuery();
    const { salesItemSchema } = useValidators()


    const branches = !isLoadingBranches
        ? branchesData.map((item) => ({ value: item.BranchId, label: item.BranchNameAr }))
        : [];

    let posStations = !isLoadingPosStations
        ? posStationsData.map((item) => ({ value: item.StationId, label: item.StationName }))
        : [];

    const onSubmit = async (data) => {
        await getSalesItems(data).unwrap();
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
            title={AppStrings.sales_items}
            icon={faList}
            data={data}
            fields={getFullSalesReportFormFields}
            schema={salesItemSchema}
            options={{ Warehouse: branches ? branches : [], StationID: posStations ? posStations : [] }}
            onSubmit={onSubmit} isLoading={isLoading}
            useComponentsColDefs={useSalesCategoryColDefs()} />

    )
}

export default ProductsSales

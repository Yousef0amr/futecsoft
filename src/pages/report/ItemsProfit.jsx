import React, { useMemo, useState } from 'react'
import useBranchManagement from '../../hook/useBranchManagement';
import AppStrings from '../../config/appStrings';
import ListReport from './../../components/report/ListReport';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import {
    useLazyGetItemsProfitsQuery
} from '../../features/reportsControllerSlice';
import {
    useGetCategoriesNoneCompostieQuery
} from '../../features/categorySlice';
import { getItemProfitReportFormFields } from '../../config/formFields';
import { useInvoicesByDateColDefs } from '../../config/agGridColConfig';
import useValidators from '../../hooks/useValidators';
const ItemsProfit = () => {
    const { data: branchesData, isLoading: isLoadingBranches } = useBranchManagement();
    const [branch, setBranch] = useState(null);
    const { data: categoriesData, isLoading: isLoadingCategories } = useGetCategoriesNoneCompostieQuery(
        {
            Warehouse: branch,
        },
        {
            skip: !branch
        }
    );

    const [getItemsProfits, { data, isLoading }] = useLazyGetItemsProfitsQuery();
    const { itemsProfitsSchema } = useValidators()



    const branches = !isLoadingBranches
        ? branchesData?.map((item) => ({ value: item.BranchId, label: item.BranchNameAr }))
        : [];

    const categories = !isLoadingCategories
        ? categoriesData?.map((item) => ({ value: item.CatID, label: item.Cat_AR_Name }))
        : [];


    const onSubmit = async (data) => {
        await getItemsProfits(data).unwrap();
    }

    const calculateInvoiceSummary = useMemo(() => (invoices = []) => {
        // return invoices?.reduce(
        //     (summary, invoice) => {
        //         summary.totalDiscount += invoice.InvoiceDiscountTotal || 0;
        //         summary.totalGrandTotal += invoice.InvoiceGrandTotal || 0;
        //         summary.totalSubTotal += invoice.InvoiceSubTotal || 0;
        //         summary.totalTaxTotal += invoice.InvoiceTaxTotal || 0;
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

    const onChange = (value, name) => {
        if (name === 'Warehouse')
            setBranch(value);
    }


    return (
        <ListReport summary={
            calculateInvoiceSummary(data)
        }
            onChange={onChange}
            title={AppStrings.items_profits}
            icon={faChartPie}
            data={data}
            fields={getItemProfitReportFormFields}
            schema={itemsProfitsSchema}
            options={{ Warehouse: branches ? branches : [], FatherID: categories ? categories : [] }}
            onSubmit={onSubmit} isLoading={isLoading}
            useComponentsColDefs={useInvoicesByDateColDefs()} />
    )
}

export default ItemsProfit

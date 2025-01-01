import React, { useMemo, useState } from 'react'
import useBranchManagement from '../../hook/useBranchManagement';

import AppStrings from '../../config/appStrings';
import ListReport from './../../components/report/ListReport';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {
    useLazyGetItemTransactionQuery
} from '../../features/reportsControllerSlice';
import { getItemTranscationReportFormFields } from '../../config/formFields';
import { useInvoicesByDateColDefs } from '../../config/agGridColConfig';
import useValidators from '../../hooks/useValidators';
import { useGetStandardAndRawMaterialsQuery } from '../../features/productSlice';

const ItemTransactions = () => {
    const { data: branchesData, isLoading: isLoadingBranches } = useBranchManagement();
    const [branch, setBranch] = useState(null);
    const { data: productsData, isLoading: isLoadingProducts } = useGetStandardAndRawMaterialsQuery({
        Warehouse: branch,
        pageNumber: 1,
        pageSize: 10
    },
        {
            skip: !branch
        }
    );

    const [getItemTransaction, { data, isLoading }] = useLazyGetItemTransactionQuery();
    const { itemTransactionSchema } = useValidators()



    const branches = !isLoadingBranches
        ? branchesData?.map((item) => ({ value: item.BranchId, label: item.BranchNameAr }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.Id, label: item.NameAr }))
        : [];


    const onSubmit = async (data) => {
        await getItemTransaction(data).unwrap();
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
            title={AppStrings.item_transaction}
            icon={faList}
            data={data}
            fields={getItemTranscationReportFormFields}
            schema={itemTransactionSchema}
            options={{ Warehouse: branches ? branches : [], ItemID: products ? products : [] }}
            onSubmit={onSubmit} isLoading={isLoading}
            useComponentsColDefs={useInvoicesByDateColDefs()} />
    )
}

export default ItemTransactions

import React, { useEffect } from 'react'
import AppStrings from '../../config/appStrings'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { useGetBranchesQuery } from '../../features/branchesSlice'
import { useLazyGetAllCategoriesByBranchQuery } from '../../features/categorySlice'
import { pricesAndCostsFormFields } from '../../config/formFields'
import useValidators from '../../hooks/useValidators'
import { useLazyGetProductsCostsQuery, } from '../../features/productSlice'
import { usePricesAndCostsColDefs } from '../../config/agGridColConfig'
import ListReport from '../../components/report/ListReport'


const PricesAndCosts = () => {
    const { pricesAndCostsSchema } = useValidators()

    const { data: branchesData, isLoading: isLoadingBranches } = useGetBranchesQuery({ pageNumber: 1, pageSize: 10 });
    const [triggerGetProductsCosts, { data, isLoading }] = useLazyGetProductsCostsQuery()

    const [
        triggerGetCategories,
        { data: categoriesData, isLoading: isLoadingCategories }
    ] = useLazyGetAllCategoriesByBranchQuery();

    useEffect(() => {
        if (branchesData) {
            triggerGetCategories(branchesData[0].BranchId);
        }
    }, [branchesData, triggerGetCategories]);

    const branches = !isLoadingBranches
        ? branchesData.map((item) => ({ value: item.BranchId, label: item.BranchNameAr }))
        : [];

    const categories = !isLoadingCategories
        ? categoriesData?.map((item) => ({ value: item.CatID, label: item.Cat_AR_Name }))
        : [];

    const onSubmit = async (data) => {
        await triggerGetProductsCosts(data).unwrap();
    }

    return (
        <ListReport title={AppStrings.prices_and_costs} icon={faMoneyBill1Wave} data={data} fields={pricesAndCostsFormFields} schema={pricesAndCostsSchema} options={{ Warehouse: branches ? branches : [], CateID: categories ? categories : [] }} onSubmit={onSubmit} isLoading={isLoading} useComponentsColDefs={usePricesAndCostsColDefs()} />
    )
}

export default PricesAndCosts

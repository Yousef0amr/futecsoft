import React, { useEffect } from 'react'
import FormCard from '../../components/common/FormCard'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../utils/appStrings'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap'
import SelectMenu from '../../components/common/SelectMenu'
import SearchFormComponent from '../../components/common/SearchFormComponent'
import { useGetBranchesQuery } from '../../features/branchesSlice'
import { useLazyGetAllCategoriesByBranchQuery } from '../../features/categorySlice'
import { pricesAndCostsFormFields } from '../../utils/constants'
import useValidators from '../../hooks/useValidators'
import AgGridTable from '../../components/common/AgGridTable'
import { useLazyGetProductsCostsQuery } from '../../features/productSlice'
import { usePricesAndCostsColDefs } from '../../config/agGridColConfig'


const PricesAndCosts = () => {
    const { t } = useTranslation()
    const { pricesAndCostsSchema } = useValidators()

    const { data: branchesData, isLoading: isLoadingBranches } = useGetBranchesQuery({ pageNumber: 1, pageSize: 10 });
    const [triggerGetProductsCosts, { data, isLoading }] = useLazyGetProductsCostsQuery()

    const [
        triggerGetCategories,
        { data: categoriesData, isLoading: isLoadingCategories }
    ] = useLazyGetAllCategoriesByBranchQuery();


    const branches = !isLoadingBranches
        ? branchesData.map((item) => ({ value: item.BranchId, label: item.BranchNameAr }))
        : [];

    const categories = !isLoadingCategories
        ? categoriesData?.map((item) => ({ value: item.CatID, label: item.Cat_AR_Name }))
        : [];


    const onSubmit = async (data) => {
        console.log(data);
        const result = await triggerGetProductsCosts(data).unwrap();
        console.log(result);
    }

    console.log(data)

    // const onSelectChange = (value, name) => {
    //     setValue(name, value);
    //     if (name === 'Father') {
    //         setCurrentCategoryId(value);
    //     }
    // };

    const productColDefs = usePricesAndCostsColDefs()
    return (
        <FormCard icon={faMoneyBill1Wave} title={t(AppStrings.prices_and_costs)}>
            <Row lg={1} md={1} sm={1} className='gap-3 w-100' >
                <Col >
                    <SearchFormComponent schema={pricesAndCostsSchema} onSubmit={onSubmit} isLoading={isLoading} >
                        {({ register, errors, setValue, watch }) => (
                            <Row>
                                {
                                    pricesAndCostsFormFields.map((field) =>
                                        <Col xs={12} md={6} key={field.name}>
                                            <SelectMenu
                                                watch={watch}
                                                onChange={(e) => {
                                                    setValue(field.name, e.target.value);
                                                    if (field.name === 'Warehouse') {
                                                        triggerGetCategories(e.target.value);
                                                    } else {
                                                        triggerGetProductsCosts({ CateID: e.target.value, Warehouse: watch('Warehouse') });
                                                    }
                                                }}
                                                errors={errors}
                                                name={field.name}
                                                options={
                                                    field.name === 'Warehouse' ?
                                                        branches :
                                                        categories || []
                                                }
                                                label={field.label}
                                                required={field.required}
                                            />
                                        </Col>
                                    )
                                }
                            </Row>
                        )
                        }
                    </SearchFormComponent>
                </Col>
                <Col className=''>
                    <AgGridTable
                        enableActions={false}
                        dynamicColumns={productColDefs}
                        rowData={data}
                        isLoading={isLoading}
                    // quickFilterText={quickFilterText}
                    />
                </Col>
            </Row>
        </FormCard>
    )
}

export default PricesAndCosts

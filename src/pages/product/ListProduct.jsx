import React, { useCallback, useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { useGetProductsQuery, useGetProductByTypeQuery } from '../../features/productSlice';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import ProductForm from '../../components/product/ProductForm';
import TabsSelect from '../../components/common/TabsSelect';
import { useProductColDefs } from '../../config/agGridColConfig';

const ListProduct = () => {
    const { t } = useTranslation();
    const productColDefs = useProductColDefs();

    const [activeTab, setActiveTab] = useState("Raw");
    const { data, isLoading } = useGetProductByTypeQuery({
        pageNumber: 1,
        pageSize: 1,
        branch: '',
        productType: activeTab,
    });

    const [quickFilterText, setQuickFilterText] = useState();
    const onFilterTextBoxChanged = useCallback(
        ({ target: { value } }) =>
            setQuickFilterText(value),
        []
    );


    const handleTabClick = (type) => {
        setActiveTab(type);
    };

    return (
        <FormCard icon={faBarcode} title={t(AppStrings.list_products)} navButton={<NavButton icon={faAdd} title={AppStrings.add_new_product} path={'/products/add'} />} optionComponent={
            <>
                <TabsSelect handleTabClick={handleTabClick} activeTab={activeTab} />
                <FilterSearch onFilterTextBoxChanged={onFilterTextBoxChanged} />
            </>
        }>
            <div className='w-100 p-1 mt-4'>
                <AgGridTable EditForm={ProductForm} dynamicColumns={productColDefs} rowData={data} isLoading={isLoading} quickFilterText={quickFilterText} />
            </div>

        </FormCard>
    )
}

export default ListProduct

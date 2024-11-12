import React, { useCallback, useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { useGetProductsQuery } from '../../features/productSlice';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import ProductForm from '../../components/product/ProductForm';

const ListProduct = () => {
    const { t } = useTranslation();


    const productColDefs = [
        { field: "Id", headerName: t(AppStrings.productId), filter: 'agNumberColumnFilter' },
        { field: "NameAr", headerName: t(AppStrings.productNameAr), filter: 'agTextColumnFilter' },
        { field: "NameEn", headerName: t(AppStrings.productNameEn), filter: 'agTextColumnFilter' },
        { field: "Father", headerName: t(AppStrings.categoryId), filter: 'agTextColumnFilter' },
        { field: "Barcode", headerName: t(AppStrings.barcode), filter: 'agTextColumnFilter' },
        { field: "Price1", headerName: t(AppStrings.price1), filter: 'agNumberColumnFilter' },
        { field: "Price2", headerName: t(AppStrings.price2), filter: 'agNumberColumnFilter' },
        { field: "Price3", headerName: t(AppStrings.price3), filter: 'agNumberColumnFilter' },
        { field: "Price4", headerName: t(AppStrings.price4), filter: 'agNumberColumnFilter' },
        { field: "Warehouse", headerName: t(AppStrings.branch), filter: 'agTextColumnFilter' },
        { field: "UnitID", headerName: t(AppStrings.unit), filter: 'agTextColumnFilter' },
        { field: "TaxPercentage", headerName: t(AppStrings.taxPercentage), filter: 'agNumberColumnFilter' },
        { field: "Discountable", headerName: t(AppStrings.discountable), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "IsService", headerName: t(AppStrings.isService), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "Saleable", headerName: t(AppStrings.saleable), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "Taxable", headerName: t(AppStrings.taxable), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        {
            field: "Icon", headerName: t(AppStrings.icon), filter: 'agTextColumnFilter', cellRenderer: (params) => (
                <img src={params.value} alt="icon" style={{ width: '30px', height: '30px' }} />
            )
        }
    ];


    const [quickFilterText, setQuickFilterText] = useState();

    const onFilterTextBoxChanged = useCallback(
        ({ target: { value } }) =>
            setQuickFilterText(value),
        []
    );

    return (
        <FormCard icon={faBarcode} title={t(AppStrings.list_products)} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={onFilterTextBoxChanged} />
                <NavButton icon={faAdd} title={AppStrings.add_new_product} path={'/products/add'} />
            </>
        }>
            <div className='w-100 p-1 mt-4'>
                <AgGridTable EditForm={ProductForm} dynamicColumns={productColDefs} dataQuery={useGetProductsQuery} quickFilterText={quickFilterText} />
            </div>

        </FormCard>
    )
}

export default ListProduct

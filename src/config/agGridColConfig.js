import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from '../utils/appStrings';
import convertBase64ToBlob from '../utils/ConvertBase64ToBlob';

export const useBranchColDefs = () => {
    const { t } = useTranslation();

    return useMemo(() => [
        { field: "BranchId", headerName: t(AppStrings.branchId), filter: 'agNumberColumnFilter' },
        { field: "BranchNameAr", headerName: t(AppStrings.branchNameAr), filter: 'agTextColumnFilter' },
        { field: "BranchNameEn", headerName: t(AppStrings.branchNameEn), filter: 'agTextColumnFilter' },
        { field: "TaxId", headerName: t(AppStrings.taxId), filter: 'agNumberColumnFilter' },
        { field: "Phones", headerName: t(AppStrings.phones), filter: 'agNumberColumnFilter' },
        { field: "Mobiles", headerName: t(AppStrings.mobiles), filter: 'agNumberColumnFilter' },
        { field: "Website", headerName: t(AppStrings.website), filter: 'agTextColumnFilter' },
        { field: "Email", headerName: t(AppStrings.email), filter: 'agTextColumnFilter' },
        { field: "Address", headerName: t(AppStrings.address), filter: 'agTextColumnFilter' },
        { field: "City", headerName: t(AppStrings.city), filter: 'agTextColumnFilter' },
        { field: "Street", headerName: t(AppStrings.street), filter: 'agTextColumnFilter' },
    ], [t]);
};

export const useProductColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        {
            field: "Icon",
            headerName: t(AppStrings.icon),
            filter: 'agTextColumnFilter',
            cellRenderer: (params) => {
                const base64String = params.value;
                if (!base64String) return <div>----</div>;
                const result = convertBase64ToBlob(base64String);
                if (result) {
                    const url = URL.createObjectURL(result);
                    return (
                        <img
                            src={url}
                            style={{ margin: '10px', width: 72, height: 72, borderRadius: '50%' }}
                            alt="----"
                        />
                    );
                } else {
                    return <div>لا توجد صورة</div>;
                }
            }
        },
        { field: "Id", headerName: t(AppStrings.productId), filter: 'agNumberColumnFilter' },

        { field: i18n.language === 'en' ? "NameEn" : "NameAr", headerName: t(i18n.language === 'en' ? AppStrings.productNameEn : AppStrings.productNameAr), filter: 'agTextColumnFilter' },
        { field: "Warehouse", headerName: t(AppStrings.branch), filter: 'agTextColumnFilter' },
        { field: "Father", headerName: t(AppStrings.category), filter: 'agTextColumnFilter' },
        { field: "Barcode", headerName: t(AppStrings.barcode), filter: 'agTextColumnFilter' },
        { field: "Price", headerName: t(AppStrings.price), filter: 'agNumberColumnFilter' },
        // { field: "Price2", headerName: t(AppStrings.price2), filter: 'agNumberColumnFilter' },
        // { field: "Price3", headerName: t(AppStrings.price3), filter: 'agNumberColumnFilter' },
        // { field: "Price4", headerName: t(AppStrings.price4), filter: 'agNumberColumnFilter' },
        // { field: "UnitID", headerName: t(AppStrings.unit), filter: 'agTextColumnFilter' },
        { field: "TaxPercentage", headerName: t(AppStrings.taxPercentage), filter: 'agNumberColumnFilter' },
        { field: "Discountable", headerName: t(AppStrings.discountable), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "IsService", headerName: t(AppStrings.isService), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "Saleable", headerName: t(AppStrings.saleable), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "Taxable", headerName: t(AppStrings.taxable), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "PreparationTime", headerName: t(AppStrings.preparationTime), filter: 'agTextColumnFilter' },
    ], [t, i18n]);
};

export const useComponentsColDefs = () => {
    const { t } = useTranslation();

    return useMemo(() => [
        { field: "ArName", headerName: t(AppStrings.productNameAr), filter: 'agTextColumnFilter' },
        { field: "EnName", headerName: t(AppStrings.productNameEn), filter: 'agTextColumnFilter' },
        { field: "FoodQty", headerName: t(AppStrings.quantity), filter: 'agTextColumnFilter' },
        { field: "UnitAr", headerName: t(AppStrings.unit) + ' -- Ar', filter: 'agNumberColumnFilter' },
        { field: "UnitEn", headerName: t(AppStrings.unit) + ' -- En', filter: 'agNumberColumnFilter' },
        { field: "Note", headerName: t(AppStrings.note), filter: 'agTextColumnFilter' },
    ], [t]);
};
export const usePricesAndCostsColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        { field: "ID", headerName: t(AppStrings.productId), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "En_Name" : "Ar_Name", headerName: t(i18n.language === 'en' ? AppStrings.productNameEn : AppStrings.productNameAr), filter: 'agTextColumnFilter' },
        { field: "Price1", headerName: t(AppStrings.price), filter: 'agTextColumnFilter' },
        { field: "Price2", headerName: t(AppStrings.price2), filter: 'agNumberColumnFilter' },
        { field: "Price3", headerName: t(AppStrings.price3), filter: 'agNumberColumnFilter' },
        { field: "Price4", headerName: t(AppStrings.price4), filter: 'agTextColumnFilter' },
        { field: "Barcode", headerName: t(AppStrings.barcode), filter: 'agTextColumnFilter' },
        { field: "DeliveryCost", headerName: t(AppStrings.deliveryCost), filter: 'agTextColumnFilter' },
        { field: "DineINCost", headerName: t(AppStrings.dineINCost), filter: 'agTextColumnFilter' },
        { field: "TakeawayCost", headerName: t(AppStrings.takeawayCost), filter: 'agTextColumnFilter' },
    ], [t, i18n]);
};

export const useCategoriesColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        { field: "Id", headerName: t(AppStrings.categoryId), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "NameAr" : "NameEn", headerName: t(i18n.language === 'en' ? AppStrings.categoryNameEn : AppStrings.categoryNameAr), filter: 'agTextColumnFilter' },
        { field: "Warehouse", headerName: t(AppStrings.branch), filter: 'agTextColumnFilter' },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "Saleable", headerName: t(AppStrings.saleable), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t, i18n]);
};


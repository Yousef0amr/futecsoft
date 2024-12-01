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
        { field: i18n.language === 'en' ? "NameEn" : "NameAr", headerName: t(i18n.language === 'en' ? AppStrings.categoryNameEn : AppStrings.categoryNameAr), filter: 'agTextColumnFilter' },
        { field: "Warehouse", headerName: t(AppStrings.branch), filter: 'agTextColumnFilter' },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "Saleable", headerName: t(AppStrings.saleable), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t, i18n]);
};


export const useUnitsColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        { field: "UnitID", headerName: t(AppStrings.unitId), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "Unit_EN" : "Unit_AR", headerName: t(i18n.language === 'en' ? AppStrings.unitNameEn : AppStrings.unitNameAr), filter: 'agTextColumnFilter' },
        { field: "Active", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t, i18n]);
};


export const useFlavorsColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        { field: "FlavorNo", headerName: t(AppStrings.flavorId), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "FlavorEN" : "FlavorAR", headerName: t(i18n.language === 'en' ? AppStrings.flavorNameEn : AppStrings.flavorNameAr), filter: 'agTextColumnFilter' },
        { field: "TagDesc", headerName: t(AppStrings.branch), filter: 'agTextColumnFilter' },
        { field: "Price", headerName: t(AppStrings.price), filter: 'agTextColumnFilter' },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t, i18n]);
};


export const useOffersColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        { field: "OfferId", headerName: t(AppStrings.offerId), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "ProductNameEn" : "ProductNameAr", headerName: t(i18n.language === 'en' ? AppStrings.offerNameEn : AppStrings.offerNameAr), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "OfferTypeEn" : "OfferTypeAr", headerName: t(i18n.language === 'en' ? AppStrings.offerTypeEn : AppStrings.offerTypeAr), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "offerValueEn" : "offerValueAr", headerName: t(AppStrings.offerValue), filter: 'agTextColumnFilter' },
        { field: "FromDate", headerName: t(AppStrings.from_date), filter: 'agTextColumnFilter' },
        { field: "ToDate", headerName: t(AppStrings.to_date), filter: 'agTextColumnFilter' },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t, i18n]);
};



export const useDiscountsColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        { field: "Serial", headerName: t(AppStrings.discountId), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "DiscountTypeEN" : "DiscountTypeAR", headerName: t(i18n.language === 'en' ? AppStrings.discount_type_en : AppStrings.discount_type_ar), filter: 'agTextColumnFilter' },
        { field: "DiscountPercentage", headerName: t(AppStrings.discount_percentage), filter: 'agTextColumnFilter' },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t, i18n]);
};


export const useTaxsColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        { field: "TaxId", headerName: t(AppStrings.tax_type_id), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "TaxEn" : "TaxAr", headerName: t(i18n.language === 'en' ? AppStrings.tax_type_en : AppStrings.tax_type_ar), filter: 'agTextColumnFilter' },
        { field: "TaxPercentage", headerName: t(AppStrings.taxPercentage), filter: 'agTextColumnFilter' },
        { field: "TaxIsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "IsDefault", headerName: t(AppStrings.isDefault), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t, i18n]);
};

export const currenciesFormFields = [
    { name: 'CurrencyId', label: AppStrings.currencyId, required: true, type: 'number', disabled: true },
    { name: 'IDigits', label: AppStrings.iDigits, required: true, type: 'number' },
    { name: 'IsDefault', label: AppStrings.isDefault, type: 'check' },
]


export const useCurrenciesColDefs = () => {
    const { t } = useTranslation();

    return useMemo(() => [
        { field: "CurrencyId", headerName: t(AppStrings.currencyId), filter: 'agTextColumnFilter' },
        { field: "IDigits", headerName: t(AppStrings.iDigits), filter: 'agTextColumnFilter' },
        { field: "IsDefault", headerName: t(AppStrings.isDefault), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t]);
};


export const usePaymentTypesColDefs = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        { field: "Ptype", headerName: t(AppStrings.paymentTypeId), filter: 'agTextColumnFilter' },
        { field: i18n.language === 'en' ? "PaymentEnDesc" : "PaymentArDesc", headerName: t(i18n.language === 'en' ? AppStrings.paymentTypeEn : AppStrings.paymentTypeEn), filter: 'agTextColumnFilter' },
        { field: "CompanyID", headerName: t(AppStrings.deliveryCompany), filter: 'agTextColumnFilter' },
        { field: "Commissions", headerName: t(AppStrings.commissions), filter: 'agTextColumnFilter' },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "CashMoney", headerName: t(AppStrings.cashMoney), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
        { field: "IsCredit", headerName: t(AppStrings.isCredit), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t, i18n]);
}


export const useSuppliersColDefs = () => {
    const { t } = useTranslation();

    return useMemo(() => [
        { field: "SupplierId", headerName: t(AppStrings.supplierId), filter: 'agTextColumnFilter' },
        { field: "WarehouseName", headerName: t(AppStrings.branch), filter: 'agTextColumnFilter' },
        { field: "SupplierCompany", headerName: t(AppStrings.supplierCompany), filter: 'agTextColumnFilter' },
        { field: "ContactName", headerName: t(AppStrings.contactName), filter: 'agTextColumnFilter' },
        { field: "Email", headerName: t(AppStrings.email), filter: 'agTextColumnFilter' },
        { field: "Phones", headerName: t(AppStrings.phones), filter: 'agTextColumnFilter' },
        { field: "Mobiles", headerName: t(AppStrings.mobiles), filter: 'agTextColumnFilter' },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t]);
}
export const useDeliveryCompaniesColDefs = () => {
    const { t } = useTranslation();

    return useMemo(() => [
        { field: "CompanyID", headerName: t(AppStrings.deliveryCompanyId), filter: 'agTextColumnFilter' },
        { field: "CompanyName", headerName: t(AppStrings.deliveryCompanyName), filter: 'agTextColumnFilter' },
        { field: "Email", headerName: t(AppStrings.email), filter: 'agTextColumnFilter' },
        { field: "Phone", headerName: t(AppStrings.phones), filter: 'agTextColumnFilter' },
        { field: "percent", headerName: t(AppStrings.deliveryPercentage), filter: 'agTextColumnFilter' },
        { field: "PriceCategory", headerName: t(AppStrings.priceCategory), filter: 'agTextColumnFilter' },
        { field: "IsActive", headerName: t(AppStrings.isActive), filter: 'agTextColumnFilter', cellRenderer: (params) => params.value ? t(AppStrings.yes) : t(AppStrings.no) },
    ], [t]);
}











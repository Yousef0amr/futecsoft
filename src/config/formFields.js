import AppStrings from "./appStrings";


export const productCheckFormFields = [
    { name: 'Discountable', label: AppStrings.discountable, required: false, type: 'check' },
    { name: 'IsService', label: AppStrings.isService, required: false, type: 'check' },
    { name: 'IsActive', label: AppStrings.isActive, required: false, type: 'check' },
    { name: 'Saleable', label: AppStrings.saleable, required: false, type: 'check' },
    { name: 'Taxable', label: AppStrings.taxable, required: false, type: 'check' },
    { name: 'PreparationTime', label: AppStrings.preparationTime, required: false, type: 'number' },
];

export const productPriceFormFields = [
    { name: 'Price', label: AppStrings.price, required: true, type: 'number' },
    { name: 'Price2', label: AppStrings.price2, required: false, type: 'number' },
    { name: 'Price3', label: AppStrings.price3, required: false, type: 'number' },
    { name: 'Price4', label: AppStrings.price4, required: false, type: 'number' },
];
export const productImageField = {
    name: 'Icon',
    required: false,
};

export const productFormFields = [
    { name: 'Id', label: AppStrings.productId, required: false, type: 'number', disabled: true },
    { name: 'NameAr', label: AppStrings.productNameAr, required: true, type: 'text' },
    { name: 'NameEn', label: AppStrings.productNameEn, required: true, type: 'text' },
    { name: 'Barcode', label: AppStrings.barcode, required: false, type: 'text' },
];

export const productSelectFormFields = [
    { name: 'Warehouse', label: AppStrings.branch, required: true, options: [], type: 'select' },
    { name: 'Father', label: AppStrings.category, required: true, options: [], type: 'select' },
    { name: 'UnitID', label: AppStrings.unit, required: true, options: [], type: 'select' },
    { name: 'TaxPercentage', label: AppStrings.taxPercentage, required: false, options: [], type: 'select' },
];

export const productComponentsFormFields = [
    { name: 'ItemID', label: AppStrings.productId, required: true, disabled: true, type: 'number' },
    { name: 'Name', label: AppStrings.description, required: false, disabled: true, type: 'text' },
    { name: 'FoodQty', label: AppStrings.quantity, required: true, type: 'number' },
    { name: 'Note', label: AppStrings.note, required: false, type: 'text' },
];

export const productComponentsFormFields1 = [
    { name: 'Father', label: AppStrings.category, required: true, options: [], type: 'select' },
    { name: 'SubItem', label: AppStrings.materials, required: true, options: [], type: 'select' },
    { name: 'Unit', label: AppStrings.unit, required: true, options: [], type: 'select' },
];


export const productTypeFormFields = [
    { name: 'Raw', label: AppStrings.raw_materials, type: 'check' },
    { name: 'Standard', label: AppStrings.finished_materials, type: 'check' },
    { name: 'Composite', label: AppStrings.assembled_materials, type: 'check' },
]


export const branchFormFields = [
    { name: 'BranchId', label: AppStrings.branchId, required: true, type: 'number', disabled: true },
    { name: 'BranchNameAr', label: AppStrings.branchNameAr, required: true, type: 'text' },
    { name: 'BranchNameEn', label: AppStrings.branchNameEn, required: true, type: 'text' },
    { name: 'TaxId', label: AppStrings.taxId, required: false, type: 'number' },
    { name: 'Phones', label: AppStrings.phones, required: false, type: 'number' },
    { name: 'Mobiles', label: AppStrings.mobiles, required: false, type: 'number' },
    { name: 'Website', label: AppStrings.website, required: false, type: 'text' },
    { name: 'Email', label: AppStrings.email, required: false, type: 'email' },
    { name: 'Address', label: AppStrings.address, required: false, type: 'text' },
    { name: 'City', label: AppStrings.city, required: false, type: 'text' },
    { name: 'Street', label: AppStrings.street, required: false, type: 'text' },
];

export const pricesAndCostsFormFields = [
    { name: 'Warehouse', label: AppStrings.branch, required: true, options: [], type: 'select' },
    { name: 'CateID', label: AppStrings.category, required: true, options: [], type: 'select' },
];

export const categoryFormFields = [
    { name: 'Id', label: AppStrings.categoryId, required: true, type: 'number', disabled: true },
    { name: 'NameAr', label: AppStrings.categoryNameAr, required: true, type: 'text' },
    { name: 'NameEn', label: AppStrings.categoryNameEn, required: true, type: 'text' },
    { name: 'Warehouse', label: AppStrings.branch, required: true, options: [], type: 'select' },
    { name: 'Saleable', label: AppStrings.saleable, required: false, type: 'check' },
    { name: 'IsActive', label: AppStrings.isActive, required: false, type: 'check' },
]

export const unitsFormFields = [
    { name: 'UnitID', label: AppStrings.unitId, required: true, type: 'number', disabled: true },
    { name: 'Unit_AR', label: AppStrings.unitNameAr, required: true, type: 'text' },
    { name: 'Unit_EN', label: AppStrings.unitNameEn, required: true, type: 'text' },
    { name: 'Active', label: AppStrings.isActive, type: 'check' },
]


export const flavorsFormFields = [
    { name: 'FlavorNo', label: AppStrings.flavorId, required: true, type: 'number', disabled: true },
    { name: 'FlavorAR', label: AppStrings.flavorNameAr, required: true, type: 'text' },
    { name: 'FlavorEN', label: AppStrings.flavorNameEn, required: true, type: 'text' },
    { name: 'Price', label: AppStrings.price, required: true, type: 'text' },

    { name: 'WareHouse', label: AppStrings.branch, required: true, options: [], type: 'select' },
    { name: 'Category', label: AppStrings.category, required: true, multiple: true, options: [], type: 'select' },
    { name: 'IsActive', label: AppStrings.isActive, type: 'check' },
]




export const offersFormFields = [
    { name: 'OfferId', label: AppStrings.offerId, required: true, type: 'number', disabled: true },
    { name: 'FromDate', label: AppStrings.from_date, required: true, type: 'date' },
    { name: 'ToDate', label: AppStrings.to_date, required: true, type: 'date' },
    { name: 'Branch', label: AppStrings.branch, required: true, options: [], type: 'select' },
    { name: 'Product', label: AppStrings.product, required: true, options: [], type: 'select' },
    { name: 'IsActive', label: AppStrings.isActive, type: 'check' },
]

export const priceOfferFormFields = [
    { name: 'Price', label: AppStrings.price, required: false, type: 'number' },
]

export const qtyOfferFormFields = [
    ...priceOfferFormFields,
    { name: 'Qty', label: AppStrings.quantity, required: false, type: 'number' },
]

export const extraOfferFormFields = [
    { name: 'Qty', label: AppStrings.quantity, required: false, type: 'number' },
    { name: 'ExtraProduct', label: AppStrings.free_product, required: false, options: [], type: 'select' },
]

export const offerTypeFormFields = [
    { name: 'PriceOffer', label: AppStrings.price_offer, type: 'check' },
    { name: 'QtyOffer', label: AppStrings.quantity, type: 'check' },
    { name: 'ExtraOffer', label: AppStrings.free_product, type: 'check' },
]



export const discountsFormFields = [
    { name: 'Serial', label: AppStrings.discountId, required: true, type: 'number', disabled: true },
    { name: 'DiscountPercentage', label: AppStrings.discount_percentage, required: true, type: 'number' },
    { name: 'DiscountTypeAR', label: AppStrings.discount_type_ar, required: true, type: 'text' },
    { name: 'DiscountTypeEN', label: AppStrings.discount_type_en, required: true, type: 'text' },
    { name: 'IsActive', label: AppStrings.isActive, type: 'check' },
]

export const taxsFormFields = [
    { name: 'TaxId', label: AppStrings.tax_type_id, required: true, type: 'number', disabled: true },
    { name: 'TaxPercentage', label: AppStrings.taxPercentage, required: true, type: 'number' },
    { name: 'TaxAr', label: AppStrings.tax_type_ar, required: true, type: 'text' },
    { name: 'TaxEn', label: AppStrings.tax_type_en, required: true, type: 'text' },
    { name: 'TaxIsActive', label: AppStrings.isActive, type: 'check' },
    { name: 'IsDefault', label: AppStrings.isDefault, type: 'check' },
]



export const currenciesFormFields = [
    { name: 'CurrencyId', label: AppStrings.currencyId, required: true, type: 'text' },
    { name: 'IDigits', label: AppStrings.iDigits, required: true, type: 'number' },
    { name: 'IsDefault', label: AppStrings.isDefault, type: 'check' },
]



export const paymentTypesFormFields = [
    { name: 'Ptype', label: AppStrings.paymentTypeId, required: true, type: 'number', disabled: true },
    { name: 'PaymentArDesc', label: AppStrings.paymentTypeAr, required: true, type: 'text' },
    { name: 'PaymentEnDesc', label: AppStrings.paymentTypeEn, required: true, type: 'text' },
    { name: 'CompanyID', label: AppStrings.deliveryCompany, options: [], required: true, type: 'select' },
    { name: 'IsActive', label: AppStrings.isActive, type: 'check' },
    { name: 'CashMoney', label: AppStrings.cashMoney, type: 'check' },
    { name: 'Commissions', label: AppStrings.commissions, required: false, type: 'number' },
    { name: 'IsCredit', label: AppStrings.isCredit, type: 'check' },
]


export const suppliersFormFields = [
    { name: 'SupplierId', label: AppStrings.supplierId, required: true, type: 'number', disabled: true },
    { name: 'SupplierCompany', label: AppStrings.supplierCompany, required: true, type: 'text' },
    { name: 'ContactName', label: AppStrings.contactName, required: true, type: 'text' },
    { name: 'Email', label: AppStrings.email, required: false, type: 'email' },
    { name: 'Phones', label: AppStrings.phones, required: false, type: 'text' },
    { name: 'Mobiles', label: AppStrings.mobiles, required: false, type: 'text' },
    { name: 'Warehouse', label: AppStrings.branch, options: [], required: true, type: 'select' },
    { name: 'IsActive', label: AppStrings.isActive, type: 'check' },
]


export const deliveryCompaniesFormFields = [
    { name: 'CompanyID', label: AppStrings.deliveryCompanyId, required: true, type: 'number', disabled: true },
    { name: 'CompanyName', label: AppStrings.deliveryCompanyName, required: true, type: 'text' },
    { name: 'Email', label: AppStrings.email, required: false, type: 'email' },
    { name: 'Phone', label: AppStrings.phones, required: false, type: 'string' },
    { name: 'percent', label: AppStrings.deliveryPercentage, required: true, type: 'number' },
    { name: 'PriceCategory', label: AppStrings.priceCategory, options: [], required: true, type: 'select' },
    { name: 'Active', label: AppStrings.isActive, type: 'check' },
]

export const deliveryDiscountFormFields = [
    { name: 'LineID', label: AppStrings.discountId, required: true, type: 'number', disabled: true },
    { name: 'CompanyID', label: AppStrings.deliveryCompany, options: [], required: true, type: 'select' },
    { name: 'FromDate', label: AppStrings.from_date, required: true, type: 'date' },
    { name: 'ToDate', label: AppStrings.to_date, required: true, type: 'date' },
    { name: 'DiscountValue', label: AppStrings.discount_percentage, required: true, type: 'number' },
    { name: 'BranchID', label: AppStrings.branch, required: true, options: [], type: 'select' },
    { name: 'IsActive', label: AppStrings.isActive, type: 'check' },
]





import AppStrings from "./../utils/appStrings";
import * as yup from "yup";
import { useTranslation } from "react-i18next";


const MainMenuValidators = () => {
    const { t } = useTranslation();


    const branchSchemaValidator = {
        BranchId: yup.string().optional(),
        BranchNameAr: yup.string().required(t(AppStrings.branchNameAr_required)),
        BranchNameEn: yup.string().required(t(AppStrings.branchNameEn_required)),
        TaxId: yup.string().optional(),
        Phones: yup.string().optional(),
        Mobiles: yup.string().optional(),
        Website: yup.string().optional(),
        Email: yup.string().optional(),
        Address: yup.string().optional(),
        City: yup.string().optional(),
        Street: yup.string().optional(),
    }


    const productSchemaValidator = {
        Id: yup.string().required(t(AppStrings.branchId_required)).nullable(),
        NameAr: yup.string().required(t(AppStrings.productNameAr_required)).nullable(),
        NameEn: yup.string().required(t(AppStrings.productNameEn_required)).nullable(),
        Father: yup.string().required(t(AppStrings.category_required)).nullable(),
        Barcode: yup.string().required(t(AppStrings.barcode_required)).nullable(),
        Price: yup
            .string()
            .required(t(AppStrings.price_required))
            .nullable(),
        Price2: yup
            .string()
            .nullable(),
        Price3: yup
            .string()
            .nullable(),
        Price4: yup
            .string()
            .nullable(),
        Warehouse: yup.string().required(t(AppStrings.branch_required)).nullable(),
        UnitID: yup.string().required(t(AppStrings.unit_required)).nullable(),
        TaxPercentage: yup.string().optional(),
        Discountable: yup.boolean().optional(),
        IsService: yup.boolean().optional(),
        IsActive: yup.boolean().optional(),
        Saleable: yup.boolean().optional(),
        Taxable: yup.boolean().optional(),
        Icon: yup.string().nullable(),
    }

    const componentSchemaValidator = {
        ItemID: yup.string().required().nullable(),
        FoodQty: yup.string().required(t(AppStrings.quantity_required)).nullable(),
        SubItem: yup.string().required(t(AppStrings.product_required)).nullable(),
        Unit: yup.string().required(t(AppStrings.unit_required)).nullable(),
        Name: yup.string().optional(),
        Note: yup.string().optional(),
        Father: yup.string().optional(),
    }



    const pricesAndCostsSchemaValidator = {
        Warehouse: yup.string().required(t(AppStrings.branch_required)).nullable(),
        CateID: yup.string().required(t(AppStrings.category_required)).nullable(),
    }


    const categorySchemaValidator = {
        Id: yup.string().required(t(AppStrings.categoryId_required)).nullable(),
        NameAr: yup.string().required(t(AppStrings.categoryNameAr_required)).nullable(),
        NameEn: yup.string().required(t(AppStrings.categoryNameEn_required)).nullable(),
        Saleable: yup.boolean().optional(),
        Warehouse: yup.string().required(t(AppStrings.branch_required)).nullable(),
        IsActive: yup.boolean().optional(),
    }

    const unitSchemaValidator = {
        UnitID: yup.string().required(t(AppStrings.unitId_required)).nullable(),
        Unit_AR: yup.string().required(t(AppStrings.unitNameAr_required)).nullable(),
        Unit_EN: yup.string().required(t(AppStrings.unitNameEn_required)).nullable(),
        Active: yup.boolean().optional(),
    }


    const flavorSchemaValidator = {
        FlavorNo: yup.string().required(t(AppStrings.flavorId_required)).nullable(),
        FlavorAR: yup.string().required(t(AppStrings.flavorNameAr_required)).nullable(),
        FlavorEN: yup.string().required(t(AppStrings.flavorNameEn_required)).nullable(),
        Price: yup.string().required(t(AppStrings.price_required)).nullable(),
        WareHouse: yup.string().required(t(AppStrings.branch_required)),
        Category: yup.array().min(1).required(t(AppStrings.category_required)),
        IsActive: yup.boolean().optional(),
    }

    const offerSchemaValidator = {
        OfferId: yup.string().required(t(AppStrings.offerId_required)).nullable(),
        Product: yup.string().required(t(AppStrings.product_required)).nullable(),
        FromDate: yup.string().required(t(AppStrings.from_date_required)).nullable(),
        ToDate: yup.string().required(t(AppStrings.to_date_required)).nullable(),
        Branch: yup.string().required(t(AppStrings.branch_required)),
        Price: yup.string().optional(),
        Qty: yup.string().optional(),
        ExtraProduct: yup.string().optional(),
        isActive: yup.boolean().optional(),
        PriceOffer: yup.boolean().optional(),
        QtyOffer: yup.boolean().optional(),
        ExtraOffer: yup.boolean().optional(),
    }





    const discountSchemaValidator = {
        Serial: yup.string().optional(),
        DiscountPercentage: yup.number().required(t(AppStrings.discount_percentage_required)).nullable(),
        DiscountTypeAR: yup.string().required(t(AppStrings.discount_type_ar_required)).nullable(),
        DiscountTypeEN: yup.string().required(t(AppStrings.discount_type_en_required)).nullable(),
        IsActive: yup.boolean().optional(),
    }


    const taxSchemaValidator = {
        TaxId: yup.string().required(t(AppStrings.taxId_required)).nullable(),
        TaxPercentage: yup.string().required(t(AppStrings.taxPercentage_required)).nullable(),
        TaxAr: yup.string().required(t(AppStrings.tax_type_ar_required)).nullable(),
        TaxEn: yup.string().required(t(AppStrings.tax_type_en_required)).nullable(),
        TaxIsActive: yup.boolean().optional(),
        IsDefault: yup.boolean().optional(),
    }


    return {
        branchSchemaValidator,
        productSchemaValidator,
        componentSchemaValidator,
        pricesAndCostsSchemaValidator,
        categorySchemaValidator,
        unitSchemaValidator,
        flavorSchemaValidator,
        offerSchemaValidator,
        discountSchemaValidator,
        taxSchemaValidator
    }
}


export default MainMenuValidators;



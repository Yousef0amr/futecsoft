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
        Price: yup.string().required(t(AppStrings.price_required)).nullable(),
        Price2: yup.string().optional(),
        Price3: yup.string().optional(),
        Price4: yup.string().optional(),
        Warehouse: yup.string().required(t(AppStrings.branch_required)).nullable(),
        UnitID: yup.string().required(t(AppStrings.unit_required)).nullable(),
        TaxPercentage: yup.string().optional(),
        Discountable: yup.string().optional(),
        IsService: yup.string().optional(),
        IsActive: yup.string().optional(),
        Saleable: yup.string().optional(),
        Taxable: yup.string().optional(),
        Icon: yup.string().required(t(AppStrings.icon_required)).nullable(),
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


    return {
        branchSchemaValidator,
        productSchemaValidator,
        componentSchemaValidator
    }
}


export default MainMenuValidators;



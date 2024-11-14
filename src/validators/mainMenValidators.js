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
        Id: yup.string().required(t(AppStrings.branchId_required)),
        NameAr: yup.string().required(t(AppStrings.branchNameAr_required)),
        NameEn: yup.string().required(t(AppStrings.branchNameEn_required)),
        Father: yup.string().optional(),
        Barcode: yup.string().optional(),
        Price: yup.string().required(t(AppStrings.mobiles_required)),
        Price2: yup.string().optional(),
        Price3: yup.string().optional(),
        Price4: yup.string().optional(),
        Warehouse: yup.string().optional(),
        UnitID: yup.string().optional(),
        TaxPercentage: yup.string().optional(),
        Discountable: yup.string().optional(),
        IsService: yup.string().optional(),
        IsActive: yup.string().optional(),
        Saleable: yup.string().optional(),
        Taxable: yup.string().optional(),
        Icon: yup.string().optional(),
    }



    return {
        branchSchemaValidator,
        productSchemaValidator
    }
}


export default MainMenuValidators;



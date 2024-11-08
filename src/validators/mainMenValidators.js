import AppStrings from "./../utils/appStrings";
import * as yup from "yup";
import { useTranslation } from "react-i18next";


const MainMenuValidators = () => {
    const { t } = useTranslation();


    const branchSchemaValidator = {
        BranchId: yup.string().required(t(AppStrings.branchId_required)),
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


    return {
        branchSchemaValidator
    }
}


export default MainMenuValidators;



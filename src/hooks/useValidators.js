import * as yup from "yup";
import MainMenuValidators from "../validators/mainMenValidators";

const useValidators = () => {
    const {
        branchSchemaValidator,
        productSchemaValidator,
        componentSchemaValidator,
        pricesAndCostsSchemaValidator,
        categorySchemaValidator,
        unitSchemaValidator,
        flavorSchemaValidator,
        offerSchemaValidator,
        discountSchemaValidator,
        taxSchemaValidator,
        currencySchemaValidator,
        deliveryCompaniesSchemaValidator,
        paymentTypesSchemaValidator,
        supplierSchemaValidator,
        deliveryDiscountSchemaValidator,
        userGroupSchemaValidator,
        userPermissionsSchemaValidator,
        userSchemaValidator,
        permissionSchemaValidator,
        invoiceSchemaValidator,
        invoiceUpdatedSchemaValidator,
        voucherInputSchemaValidator,
        voucherInputUpdatedSchemaValidator,
        voucherOutputSchemaValidator,
        voucherOutputUpdatedSchemaValidator,
        voucherTransferSchemaValidator,
        voucherTransferUpdatedSchemaValidator
    } = MainMenuValidators();

    const branchSchema = yup.object(branchSchemaValidator);
    const productSchema = yup.object(productSchemaValidator);
    const componentSchema = yup.object(componentSchemaValidator);
    const pricesAndCostsSchema = yup.object(pricesAndCostsSchemaValidator);
    const categorySchema = yup.object(categorySchemaValidator);
    const unitSchema = yup.object(unitSchemaValidator);
    const flavorSchema = yup.object(flavorSchemaValidator);
    const offerSchema = yup.object(offerSchemaValidator);
    const discountSchema = yup.object(discountSchemaValidator);
    const taxSchema = yup.object(taxSchemaValidator);
    const currencySchema = yup.object(currencySchemaValidator);
    const deliveryCompaniesSchema = yup.object(deliveryCompaniesSchemaValidator);
    const paymentTypesSchema = yup.object(paymentTypesSchemaValidator);
    const supplierSchema = yup.object(supplierSchemaValidator);
    const deliveryDiscountSchema = yup.object(deliveryDiscountSchemaValidator);
    const userGroupSchema = yup.object(userGroupSchemaValidator);
    const userPermissionsSchema = yup.object(userPermissionsSchemaValidator);
    const userSchema = yup.object(userSchemaValidator);
    const permissionSchema = yup.object(permissionSchemaValidator);
    const invoiceSchema = yup.object(invoiceSchemaValidator);
    const invoiceUpdatedSchema = yup.object(invoiceUpdatedSchemaValidator);
    const voucherInputSchema = yup.object(voucherInputSchemaValidator);
    const voucherInputUpdatedSchema = yup.object(voucherInputUpdatedSchemaValidator);
    const voucherOutputSchema = yup.object(voucherOutputSchemaValidator);
    const voucherOutputUpdatedSchema = yup.object(voucherOutputUpdatedSchemaValidator);
    const voucherTransferSchema = yup.object(voucherTransferSchemaValidator);
    const voucherTransferUpdatedSchema = yup.object(voucherTransferUpdatedSchemaValidator);


    return {
        branchSchema,
        productSchema,
        componentSchema,
        pricesAndCostsSchema,
        categorySchema,
        unitSchema,
        flavorSchema,
        offerSchema,
        discountSchema,
        taxSchema,
        currencySchema,
        deliveryCompaniesSchema,
        paymentTypesSchema,
        supplierSchema,
        deliveryDiscountSchema,
        userGroupSchema,
        userPermissionsSchema,
        userSchema,
        permissionSchema,
        invoiceSchema,
        invoiceUpdatedSchema,
        voucherInputSchema,
        voucherInputUpdatedSchema,
        voucherOutputSchema,
        voucherOutputUpdatedSchema,
        voucherTransferSchema,
        voucherTransferUpdatedSchema
    };
};

export default useValidators;


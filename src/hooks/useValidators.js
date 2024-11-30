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
        currencySchemaValidator
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
        currencySchema
    };
};

export default useValidators;


import * as yup from "yup";
import MainMenuValidators from "../validators/mainMenValidators";

const useValidators = () => {
    const {
        branchSchemaValidator,
        productSchemaValidator,
        componentSchemaValidator,
        pricesAndCostsSchemaValidator,
        categorySchemaValidator
    } = MainMenuValidators();

    const branchSchema = yup.object(branchSchemaValidator);
    const productSchema = yup.object(productSchemaValidator);
    const componentSchema = yup.object(componentSchemaValidator);
    const pricesAndCostsSchema = yup.object(pricesAndCostsSchemaValidator);
    const categorySchema = yup.object(categorySchemaValidator);

    return {
        branchSchema,
        productSchema,
        componentSchema,
        pricesAndCostsSchema,
        categorySchema
    };
};

export default useValidators;


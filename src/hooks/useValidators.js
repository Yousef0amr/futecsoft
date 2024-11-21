import * as yup from "yup";
import MainMenuValidators from "../validators/mainMenValidators";

const useValidators = () => {
    const { branchSchemaValidator, productSchemaValidator, componentSchemaValidator, pricesAndCostsSchemaValidator } = MainMenuValidators();

    const branchSchema = yup.object(branchSchemaValidator);
    const productSchema = yup.object(productSchemaValidator);
    const componentSchema = yup.object(componentSchemaValidator);
    const pricesAndCostsSchema = yup.object(pricesAndCostsSchemaValidator);

    return {
        branchSchema,
        productSchema,
        componentSchema,
        pricesAndCostsSchema
    };
};

export default useValidators;


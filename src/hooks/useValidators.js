import * as yup from "yup";
import MainMenuValidators from "../validators/mainMenValidators";

const useValidators = () => {
    const { branchSchemaValidator, productSchemaValidator, componentSchemaValidator } = MainMenuValidators();

    const branchSchema = yup.object(branchSchemaValidator);
    const productSchema = yup.object(productSchemaValidator);
    const componentSchema = yup.object(componentSchemaValidator);

    return {
        branchSchema,
        productSchema,
        componentSchema
    };
};

export default useValidators;


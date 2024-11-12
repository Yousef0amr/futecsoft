import * as yup from "yup";
import MainMenuValidators from "../validators/mainMenValidators";

const useValidators = () => {
    const { branchSchemaValidator, productSchemaValidator } = MainMenuValidators();

    const branchSchema = yup.object(branchSchemaValidator);
    const productSchema = yup.object(productSchemaValidator);

    return {
        branchSchema,
        productSchema
    };
};

export default useValidators;


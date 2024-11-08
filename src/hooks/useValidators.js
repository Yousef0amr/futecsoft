import * as yup from "yup";
import MainMenuValidators from "../validators/mainMenValidators";

const useValidators = () => {
    const { branchSchemaValidator } = MainMenuValidators();

    const branchSchema = yup.object(branchSchemaValidator);

    return {
        branchSchema,
    };
};

export default useValidators;


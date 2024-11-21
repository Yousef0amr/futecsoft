import React from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import { Row } from 'react-bootstrap';
import ComponentFormFields from './ComponentFormFields';



const CompositeComponentsForm = ({ onSubmit, isLoadingKey, resetForm, defaultValuesEdit = {} }) => {
    const { componentSchema } = useValidators();

    return (
        <FormComponent isLoading={isLoadingKey} resetForm={resetForm} defaultValues={{ ItemID: defaultValuesEdit.Id, Father: defaultValuesEdit.CatID, Name: defaultValuesEdit.NameAr }} schema={componentSchema} onSubmit={onSubmit}>
            {({ register, errors, setValue, watch }) => (
                <Row style={{ marginTop: '15px' }} lg={1}>
                    <ComponentFormFields register={register} errors={errors} watch={watch} setValue={setValue} />
                </Row>
            )}
        </FormComponent>
    )
}

export default CompositeComponentsForm

import React, { useState } from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import { Col, Row } from 'react-bootstrap';
import AgGridTable from '../../components/common/AgGridTable';
import AppStrings from './../../utils/appStrings';
import { useComponentsColDefs } from '../../config/agGridColConfig';
import { useAddComponentMutation, useGetCompositeComponentsByIdQuery } from '../../features/productSlice';
import { useTranslation } from 'react-i18next';
import ComponentFormFields from './ComponentFormFields';
import useNotification from '../../hooks/useNotification';




const CompositeComponentsForm = ({ quickFilterText, defaultValuesEdit = {} }) => {
    const { t } = useTranslation();
    const { componentSchema } = useValidators();
    const componentsColDefs = useComponentsColDefs();
    const { success, error } = useNotification();
    const { data, isLoading } = useGetCompositeComponentsByIdQuery(defaultValuesEdit.Id);
    const [reset, setReset] = useState(false);


    const [addComponent, { isLoading: isLoadingKey }] = useAddComponentMutation();

    const onSubmit = async (data) => {
        try {
            const result = await addComponent(data).unwrap();
            if (result.Success) {
                setReset(true);
                success(t(AppStrings.component_added_successfully));
            } else {
                throw new Error(result.Success);
            }
        } catch (e) {
            error(t(AppStrings.material_already_added));
        }
    }

    const AgGridTableMemo = React.memo(AgGridTable);
    return (
        <Row lg={2} >
            <Col style={{ marginTop: '20px' }}>
                {
                    <div className='w-100 p-1 mt-4'>
                        <AgGridTableMemo
                            actions={{ handleOnEditClick: () => { }, handleDeleteClick: () => { } }}
                            dynamicColumns={componentsColDefs}
                            rowData={data}
                            isLoading={isLoading}
                            quickFilterText={quickFilterText}
                        />
                    </div>
                }
            </Col>
            <Col >
                <FormComponent isLoading={isLoadingKey} restForm={reset} defaultValues={{ ItemID: defaultValuesEdit.Id, Father: defaultValuesEdit.CatID, Name: defaultValuesEdit.NameAr }} schema={componentSchema} onSubmit={onSubmit}>
                    {({ register, errors, setValue, watch }) => (
                        <Row style={{ marginTop: '15px' }} lg={1}>
                            <ComponentFormFields register={register} errors={errors} watch={watch} setValue={setValue} />
                        </Row>
                    )}
                </FormComponent>
            </Col>
        </Row>
    )
}

export default CompositeComponentsForm

import React, { useState } from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import { Col, Row } from 'react-bootstrap';
import AgGridTable from '../../components/common/AgGridTable';
import AppStrings from './../../utils/appStrings';
import { useComponentsColDefs } from '../../config/agGridColConfig';
import { productsApi, useAddComponentMutation, useGetCompositeComponentsByIdQuery } from '../../features/productSlice';
import { useTranslation } from 'react-i18next';
import ComponentFormFields from './ComponentFormFields';
import { useDispatch } from 'react-redux';
import useNotification from '../../hooks/useNotification';


const CompositeComponentsForm = ({ quickFilterText, defaultValuesEdit = {} }) => {
    const { t } = useTranslation();
    const { componentSchema } = useValidators();
    const componentsColDefs = useComponentsColDefs();
    const { success, error } = useNotification();
    const { data, isLoading } = useGetCompositeComponentsByIdQuery(defaultValuesEdit.Id);
    const [reset, setReset] = useState(false);
    const dispatch = useDispatch();

    const [addComponent, { isLoading: isLoadingKey }] = useAddComponentMutation();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const result = await addComponent(data).unwrap();
            if (result.Success) {
                success(t(AppStrings.component_added_successfully));
                setReset(true);

                const component = {
                    ItemId: data.ItemID,
                    Note: data.Note,
                    UnitAr: data.Unit,
                    UnitEn: data.Unit,
                    ItemArName: data.Name,
                    ItemEnName: data.Name,
                    EnName: data.Father,
                    FoodQty: data.FoodQty
                }
                try {
                    dispatch(
                        productsApi.util.updateQueryData(
                            'getCompositeComponentsById',
                            defaultValuesEdit.Id,
                            (draft) => {
                                console.log('draft', draft);
                                if (Array.isArray(draft)) {
                                    draft.unshift(component);
                                } else {
                                    throw new Error('Query data is not an array');
                                }
                            }
                        ));
                } catch (error) {
                    console.log(error);
                }
            } else {
                error(t(AppStrings.something_went_wrong));
            }
        } catch (e) {
            error(t(AppStrings.something_went_wrong));
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

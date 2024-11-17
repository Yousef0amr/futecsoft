import React, { useCallback, useEffect, useState } from 'react';
import FormComponent from '../common/FormComponent';
import useValidators from '../../hooks/useValidators';
import { Col, Row } from 'react-bootstrap';
import { Stack } from '@mui/material';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import AppStrings from './../../utils/appStrings';
import { useComponentsColDefs } from '../../config/agGridColConfig';
import { productsApi, useAddComponentMutation, useGetCompositeComponentsByIdQuery } from '../../features/productSlice';
import { useTranslation } from 'react-i18next';
import ComponentFormFields from './ComponentFormFields';
import { useDispatch } from 'react-redux';
import useNotification from '../../hooks/useNotification';


const CompositeComponentsForm = ({ isLoading, restForm, defaultValuesEdit = {} }) => {
    const { t } = useTranslation();
    const { componentSchema } = useValidators();
    const componentsColDefs = useComponentsColDefs();
    const { success, error } = useNotification();
    const { data } = useGetCompositeComponentsByIdQuery(defaultValuesEdit.Id);
    const [reset, setReset] = useState(false);
    const dispatch = useDispatch();

    const [addComponent, { isLoading: isLoadingKey }] = useAddComponentMutation();

    const [quickFilterText, setQuickFilterText] = useState();
    const onFilterTextBoxChanged = useCallback(
        ({ target: { value } }) =>
            setQuickFilterText(value),
        []
    );


    const onSubmit = async (data) => {
        try {
            const result = await addComponent(data).unwrap();
            if (result.Success) {
                setReset(true);
                success(t(AppStrings.component_added_successfully));
                try {
                    dispatch(
                        productsApi.util.updateQueryData(
                            'getCompositeComponentsById',
                            defaultValuesEdit.Id,
                            (draft) => {
                                console.log('draft', draft);
                                if (Array.isArray(draft)) {
                                    draft.unshift(data);
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
                <FormCard icon={faBarcode} title={t(AppStrings.list_components)} optionComponent={
                    <>
                        <FilterSearch onFilterTextBoxChanged={onFilterTextBoxChanged} />
                    </>
                }>
                    {
                        <div className='w-100 p-1 mt-4'>
                            <AgGridTableMemo
                                EditForm={null}
                                dynamicColumns={componentsColDefs}
                                rowData={data}
                                isLoading={isLoading}
                                quickFilterText={quickFilterText}
                            />
                        </div>
                    }
                </FormCard>
            </Col>
            <Col > <FormComponent isLoading={isLoading} restForm={reset} defaultValues={{ ItemID: defaultValuesEdit.Id, Father: defaultValuesEdit.CatID, Name: defaultValuesEdit.NameAr }} schema={componentSchema} onSubmit={onSubmit}>
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

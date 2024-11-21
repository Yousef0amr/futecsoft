import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AgGridTable from '../../components/common/AgGridTable';
import { useComponentsColDefs } from '../../config/agGridColConfig';
import CompositeComponentsForm from './CompositeComponentsForm';
import AppStrings from '../../utils/appStrings';
import { useTranslation } from 'react-i18next';


const CompositeComponents = ({ handleAddClick, data, isLoading, enableReset, onSubmit, resetForm, actionLoading, actions, quickFilterText, defaultValuesEdit }) => {
    const componentsColDefs = useComponentsColDefs();
    const AgGridTableMemo = React.memo(AgGridTable);
    const { t } = useTranslation();
    return (
        <Row lg={2} >
            <Col style={{ marginTop: '20px' }}>
                <AgGridTableMemo
                    actions={actions}
                    dynamicColumns={componentsColDefs}
                    rowData={data}
                    isLoading={isLoading}
                    quickFilterText={quickFilterText}
                />
            </Col>
            <Col >
                <Button className='activeEditButton' style={{ fontSize: '14px', fontWeight: '600', marginTop: '20px', marginBottom: '20px' }} onClick={handleAddClick}>{t(AppStrings.add_new_component)}</Button>
                <CompositeComponentsForm enableReset={enableReset} isLoadingKey={actionLoading} onSubmit={onSubmit} resetForm={resetForm} defaultValuesEdit={defaultValuesEdit} />
            </Col>
        </Row>
    )
}

export default CompositeComponents

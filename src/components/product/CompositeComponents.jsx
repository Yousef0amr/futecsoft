import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AgGridTable from '../../components/common/AgGridTable';
import { useComponentsColDefs } from '../../config/agGridColConfig';
import CompositeComponentsForm from './CompositeComponentsForm';


const CompositeComponents = ({ data, isLoading, enableReset, onSubmit, resetForm, actionLoading, actions, quickFilterText, defaultValuesEdit }) => {
    const componentsColDefs = useComponentsColDefs();
    const AgGridTableMemo = React.memo(AgGridTable);
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
                <CompositeComponentsForm enableReset={enableReset} isLoadingKey={actionLoading} onSubmit={onSubmit} resetForm={resetForm} defaultValuesEdit={defaultValuesEdit} />
            </Col>
        </Row>
    )
}

export default CompositeComponents

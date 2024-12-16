import React from 'react'
import { useInvoicesItemsColDefs } from '../../config/agGridColConfig';
import AgGridTable from '../common/AgGridTable';
import { useTranslation } from 'react-i18next';
import { Button, Col, Row } from 'react-bootstrap';
import InvoiceItemForm from './InvoiceItemForm';
import AppStrings from '../../config/appStrings';

const InvoiceItems = ({ handleAddClick, isEditing, data, isLoading, enableReset, onSubmit, resetForm, actionLoading, actions, quickFilterText, defaultValuesEdit }) => {
    const componentsColDefs = useInvoicesItemsColDefs();
    const AgGridTableMemo = React.memo(AgGridTable);
    const { t } = useTranslation();
    return (
        <div className='w-100'>
            <Row lg={2} md={1} sm={1} >
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
                    {
                        isEditing ?
                            <Button style={{ border: ' none', backgroundColor: 'rgba(255, 0, 0, 0.651)', fontSize: '14px', fontWeight: '600', marginTop: '20px', marginBottom: '20px' }} onClick={handleAddClick}>{t(AppStrings.cancel_editing)}</Button> : null
                    }
                    <InvoiceItemForm enableReset={enableReset} isLoading={actionLoading} onSubmit={onSubmit} resetForm={resetForm} defaultValuesEdit={defaultValuesEdit} />
                </Col>
            </Row>
        </div>

    )
}

export default InvoiceItems
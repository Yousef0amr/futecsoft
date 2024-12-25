import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'
import FormCard from '../../components/common/FormCard'
import AgGridTable from '../../components/common/AgGridTable'
import ReportForm from './ReportForm'
import FilterSearch from '../../components/common/FilterSearch'




const ListReport = ({ options, onSubmit, schema, fields, icon, title, data, isLoading, useComponentsColDefs }) => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    return (
        <FormCard icon={icon} title={t(title)} optionComponent={<FilterSearch onFilterTextBoxChanged={setQuickFilterText} />}>
            <Row lg={1} md={1} sm={1} className='gap-3 w-100' >
                <Col >
                    <ReportForm options={options} fields={fields} isLoading={isLoading} schema={schema} onSubmit={onSubmit} />
                </Col>
                <Col className=''>
                    <AgGridTable
                        enableActions={false}
                        dynamicColumns={useComponentsColDefs}
                        rowData={data}
                        isLoading={isLoading}
                        quickFilterText={quickFilterText}
                    />
                </Col>
            </Row>
        </FormCard>
    )
}

export default ListReport

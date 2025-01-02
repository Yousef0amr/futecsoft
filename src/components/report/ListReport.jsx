import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Stack } from 'react-bootstrap'
import FormCard from '../../components/common/FormCard'
import AgGridTable from '../../components/common/AgGridTable'
import ReportForm from './ReportForm'
import FilterSearch from '../../components/common/FilterSearch'
import AppStrings from '../../config/appStrings'




const ListReport = ({ options, onChange, onSubmit, summary, schema, fields, icon, title, data, isLoading, useComponentsColDefs }) => {
    const { t } = useTranslation();
    const [quickFilterText, setQuickFilterText] = useState();
    return (
        <FormCard icon={icon} title={t(title)} optionComponent={<FilterSearch onFilterTextBoxChanged={setQuickFilterText} />}>
            <Row lg={1} md={1} sm={1} className='gap-3 w-100' >
                <Col >
                    <ReportForm onChange={onChange} options={options} fields={fields} isLoading={isLoading} schema={schema} onSubmit={onSubmit} />
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
                <Col >
                    <Row >
                        {
                            summary && Object.entries(summary)?.map(([key, value]) => (
                                <Col key={key} xs={12} sm={6} md={4} lg={2} >
                                    <Stack className='text-center mt-2' style={{ borderRadius: '5px', color: 'white', backgroundColor: 'var( --border-color-1)', border: '1px solid var(--border-color-1)', padding: '2px', }} >
                                        <span >
                                            {t(AppStrings[key])}
                                        </span>
                                        <span >
                                            {value}
                                        </span>
                                    </Stack>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </FormCard>
    )
}

export default ListReport

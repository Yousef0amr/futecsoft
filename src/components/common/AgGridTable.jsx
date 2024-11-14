import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { AG_GRID_LOCALE_EG, AG_GRID_LOCALE_EN } from '@ag-grid-community/locale';
import { Button } from '@mui/material';
import { ActionsCellRenderer } from './ActionsCellRenderer';

const AgGridTable = ({ EditForm, rowData, isLoading, pageSizeOptions = [10, 20, 50, 100], initialPageSize = 10, dynamicColumns = [], quickFilterText }) => {
    const { t, i18n } = useTranslation();
    const [pageSize, setPageSize] = useState(initialPageSize);
    const [pageNumber, setPageNumber] = useState(1);
    const gridApiRef = useRef(null);


    const [selectedRowData, setSelectedRowData] = useState(null);
    const isRtl = useMemo(() => i18n.language !== 'en', [i18n.language]);
    const localeText = useMemo(() => (isRtl ? AG_GRID_LOCALE_EG : AG_GRID_LOCALE_EN), [isRtl]);

    const colDefs = useMemo(() => [
        {
            field: t(AppStrings.actions),
            cellRenderer: ActionsCellRenderer,
            cellRendererParams: {
                setSelectedRowData,
            },
            minWidth: 194,
        },
        ...dynamicColumns,
    ], [setSelectedRowData, dynamicColumns, t]);


    useEffect(() => {
        const handleLanguageChange = (lng) => {
            setPageNumber(1);
        };
        i18n.on('languageChanged', handleLanguageChange);
        return () => i18n.off('languageChanged', handleLanguageChange);
    }, [i18n]);

    const onGridReady = (params) => {
        gridApiRef.current = params.api;
        setPageNumber(params.api.paginationGetCurrentPage() + 1);
    };

    const onPaginationChanged = () => {
        if (gridApiRef.current) {
            const currentPage = gridApiRef.current.paginationGetCurrentPage();
            setPageNumber(currentPage + 1);
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <div className="ag-theme-alpine" style={{ height: '70vh' }}>
                <AgGridReact
                    key={i18n.language}
                    loading={isLoading}
                    pagination={true}
                    paginationPageSize={pageSize}
                    paginationPageSizeSelector={pageSizeOptions}
                    rowData={rowData}
                    columnDefs={colDefs}
                    quickFilterText={quickFilterText}
                    defaultColDef={{ autoHeight: true, cellStyle: { display: 'flex', justifyContent: 'center', alignItems: 'center' } }}
                    domLayout='normal'
                    enableRtl={isRtl}
                    localeText={localeText}
                    onGridReady={onGridReady}
                    onPaginationChanged={onPaginationChanged}
                />
            </div>
            {selectedRowData && (
                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3>{t(AppStrings.edit)}</h3>
                        <Button variant="outlined" color="black" sx={{ color: 'var(--text-color)', fontSize: '17px', '&:hover': { backgroundColor: 'var(--secondary-color)', color: 'white' } }} onClick={() => setSelectedRowData(null)}>{t(AppStrings.finish_edit)}</Button>
                    </div>
                    <EditForm defaultValuesEdit={selectedRowData} />
                </div>
            )}
        </div>
    );
};

export default AgGridTable;

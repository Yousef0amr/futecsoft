import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { AG_GRID_LOCALE_EG, AG_GRID_LOCALE_EN } from '@ag-grid-community/locale';
import BranchForm from '../branch/BranchForm';
import { Button } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import FilterSearch from './FilterSearch';

const AgGridTable = ({ pageSizeOptions = [10, 20, 50, 100], initialPageSize = 10, dataQuery, dynamicColumns = [], quickFilterText }) => {
    const { t, i18n } = useTranslation();
    const [pageSize, setPageSize] = useState(initialPageSize);
    const [pageNumber, setPageNumber] = useState(1);
    const gridApiRef = useRef(null);
    const { data, isLoading } = dataQuery({ pageNumber, pageSize });
    const [rowData, setRowData] = useState([]);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const isRtl = useMemo(() => i18n.language !== 'en', [i18n.language]);
    const localeText = useMemo(() => (isRtl ? AG_GRID_LOCALE_EG : AG_GRID_LOCALE_EN), [isRtl]);


    useEffect(() => {
        if (!isLoading && data) {
            setRowData(data.Response);
        }
    }, [data, isLoading]);


    const colDefs = useMemo(() => [
        ...dynamicColumns,

    ], [t]);





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

    // Handle row selection event
    const onSelectionChanged = () => {
        const selectedRows = gridApiRef.current.getSelectedRows();
        if (selectedRows.length > 0) {
            setSelectedRowData(selectedRows[0]);
        } else {
            setSelectedRowData(null);
        }
    };

    // const defCol = useMemo(() => {
    //     return {
    //         flex: 1,
    //         minWidth: 100,
    //         resizable: true,
    //     };
    // }, []);

    const rowSelection = useMemo(() => {
        return {
            mode: 'singleRow',
            enableClickSelection: true,
        };
    }, []);

    return (
        <div style={{ width: '100%' }}>

            <div className="ag-theme-alpine" style={{ height: '70vh' }}>
                <AgGridReact

                    key={i18n.language}
                    rowSelection={rowSelection}
                    pagination={true}
                    paginationPageSize={pageSize}
                    paginationPageSizeSelector={pageSizeOptions}
                    rowData={rowData}
                    columnDefs={colDefs}
                    quickFilterText={quickFilterText}
                    domLayout='normal'
                    enableRtl={isRtl}
                    localeText={localeText}
                    onGridReady={onGridReady}
                    onPaginationChanged={onPaginationChanged}
                    onSelectionChanged={onSelectionChanged}
                    scrollbarWidth={'thin'}
                />
            </div>
            {selectedRowData && (
                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='d-flex justify-content-between align-items-center gap-2'>{t(AppStrings.edit_branch) + '  |  ' + selectedRowData.BranchId}</h3>
                        <Button variant="text" color="error" ><DeleteForever /></Button>
                    </div>

                    <BranchForm defaultValues={selectedRowData} />
                </div>
            )}
        </div>
    );
};

export default AgGridTable;

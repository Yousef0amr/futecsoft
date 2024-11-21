import React, { useRef, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { AG_GRID_LOCALE_EG, AG_GRID_LOCALE_EN } from '@ag-grid-community/locale';
import ActionsCellRenderer from './ActionsCellRenderer';

const AgGridTable = ({ actions, actionsCellRenderer = ActionsCellRenderer, rowData, isLoading, dynamicColumns = [], quickFilterText }) => {
    const { t, i18n } = useTranslation();
    const gridApiRef = useRef(null);
    const isRtl = useMemo(() => i18n.language !== 'en', [i18n.language]);
    const localeText = useMemo(() => (isRtl ? AG_GRID_LOCALE_EG : AG_GRID_LOCALE_EN), [isRtl]);

    const colDefs = useMemo(() => [
        {
            field: t(AppStrings.actions),
            cellRenderer: actionsCellRenderer,
            cellRendererParams: actions,
            minWidth: 194,
        },
        ...dynamicColumns,
    ], [dynamicColumns, t, actionsCellRenderer, actions]);

    useEffect(() => {
        const handleLanguageChange = () => {
            if (gridApiRef.current) {
                gridApiRef.current.refreshCells();
            }
        };
        i18n.on('languageChanged', handleLanguageChange);
        return () => i18n.off('languageChanged', handleLanguageChange);
    }, [i18n]);

    const rowSelection = useMemo(() => {
        return {
            mode: 'singleRow',
            checkboxes: false,
            enableClickSelection: true,

        };
    }, []);

    <AgGridReact rowSelection={rowSelection} />
    return (
        <div style={{ width: '100%' }}>
            <div className="ag-theme-alpine" style={{ height: '70vh' }}>
                <AgGridReact
                    key={i18n.language}
                    rowSelection={rowSelection}
                    loading={isLoading}
                    pagination={true}
                    paginationPageSize={10}
                    rowData={rowData}
                    paginationPageSizeSelector={[10, 20, 50, 100]}
                    columnDefs={colDefs}
                    quickFilterText={quickFilterText}
                    defaultColDef={{ cellStyle: { display: 'flex', justifyContent: 'center', alignItems: 'center' } }}
                    domLayout='normal'
                    enableRtl={isRtl}
                    localeText={localeText}
                />
            </div>
        </div>
    );
};

export default AgGridTable;

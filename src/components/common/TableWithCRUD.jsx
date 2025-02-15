import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { enUS, arSD } from '@mui/x-data-grid/locales';
import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

import { CacheProvider } from '@emotion/react';
import AppStrings from '../../config/appStrings';


const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
    return null
};

const cacheRtl = createCache({
    key: 'data-grid-rtl-demo',
    stylisPlugins: [prefixer, rtlPlugin],
});
function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;


    const handleClick = () => {
        const id = 1
        setRows((oldRows) => [
            ...oldRows,
            { id, name: '', age: '', role: '', isNew: true },
        ]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                Add record
            </Button>
        </GridToolbarContainer>
    );
}

export default function TableWithCRUD({ columns, initialRows }) {

    const [rows, setRows] = React.useState({});
    const { t, i18n } = useTranslation()
    const existingTheme = useTheme();

    const [rowModesModel, setRowModesModel] = React.useState({});


    const theme = React.useMemo(
        () =>
            createTheme({}, arSD, existingTheme, {
                direction: 'rtl',
            }),
        [existingTheme],
    );

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    React.useEffect(() => {
        if (initialRows) {
            setRows(initialRows.map((row, index) => ({ ...row, id: index })));
        }
    }, [initialRows]);

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };


    return (
        <Box

            sx={{

                height: 500,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <div dir="rtl" style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={[
                                {
                                    field: 'actions',
                                    type: 'actions',
                                    headerName: t(AppStrings.actions),
                                    width: 120,
                                    getActions: ({ id }) => {
                                        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                                        if (isInEditMode) {
                                            return [
                                                <GridActionsCellItem
                                                    icon={<SaveIcon />}
                                                    label="Save"
                                                    sx={{ color: 'primary.main' }}
                                                    onClick={handleSaveClick(id)}
                                                />,
                                                <GridActionsCellItem
                                                    icon={<CancelIcon />}
                                                    label="Cancel"
                                                    className="textPrimary"
                                                    onClick={handleCancelClick(id)}
                                                    color="inherit"
                                                />,
                                            ];
                                        }

                                        return [
                                            <GridActionsCellItem
                                                icon={<EditIcon />}
                                                label="Edit"
                                                className="textPrimary"
                                                onClick={handleEditClick(id)}
                                                color="inherit"
                                            />,
                                            <GridActionsCellItem
                                                icon={<DeleteIcon />}
                                                label="Delete"
                                                onClick={handleDeleteClick(id)}
                                                color="inherit"
                                            />,
                                        ];
                                    },
                                },

                            ].concat(columns)}
                            editMode="row"

                            localeText={
                                i18n.language === 'en' ? enUS.components.MuiDataGrid.defaultProps.localeText : arSD.components.MuiDataGrid.defaultProps.localeText
                            }
                            rowModesModel={rowModesModel}
                            onRowModesModelChange={handleRowModesModelChange}
                            onRowEditStop={handleRowEditStop}
                            processRowUpdate={processRowUpdate}
                            slots={{ toolbar: EditToolbar }}
                            slotProps={{
                                toolbar: { setRows, setRowModesModel },
                            }}
                        />
                    </div>

                </ThemeProvider>
            </CacheProvider>

        </Box>
    );
}

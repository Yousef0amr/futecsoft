import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Using Alpine theme for better styling
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { AG_GRID_LOCALE_EG } from '@ag-grid-community/locale';
const ListBranches = () => {
    const { t } = useTranslation();
    const [rowData] = useState([
        { BranchId: 1, BranchNameAr: "فرع الرياض", BranchNameEn: "Riyadh Branch", TaxId: 101, Phones: 123456789, Mobiles: 987654321, Website: "https://riyadhbranch.com", Email: "contact@riyadhbranch.com", Address: "123 Riyadh St.", City: "Riyadh", Street: "King Road" },
        { BranchId: 2, BranchNameAr: "فرع جدة", BranchNameEn: "Jeddah Branch", TaxId: 102, Phones: 234567890, Mobiles: 876543210, Website: "https://jeddahbranch.com", Email: "contact@jeddahbranch.com", Address: "456 Jeddah St.", City: "Jeddah", Street: "Queen Road" },
        { BranchId: 3, BranchNameAr: "فرع الدمام", BranchNameEn: "Dammam Branch", TaxId: 103, Phones: 345678901, Mobiles: 765432109, Website: "https://dammambranch.com", Email: "contact@dammambranch.com", Address: "789 Dammam St.", City: "Dammam", Street: "Prince Road" },
        { BranchId: 4, BranchNameAr: "فرع مكة", BranchNameEn: "Makkah Branch", TaxId: 104, Phones: 456789012, Mobiles: 654321098, Website: "https://makkahbranch.com", Email: "contact@makkahbranch.com", Address: "101 Makkah St.", City: "Makkah", Street: "Islamic Road" },
        { BranchId: 5, BranchNameAr: "فرع المدينة", BranchNameEn: "Medina Branch", TaxId: 105, Phones: 567890123, Mobiles: 543210987, Website: "https://medinabranch.com", Email: "contact@medinabranch.com", Address: "202 Medina St.", City: "Medina", Street: "Holy Road" },
        { BranchId: 1, BranchNameAr: "فرع الرياض", BranchNameEn: "Riyadh Branch", TaxId: 101, Phones: 123456789, Mobiles: 987654321, Website: "https://riyadhbranch.com", Email: "contact@riyadhbranch.com", Address: "123 Riyadh St.", City: "Riyadh", Street: "King Road" },
        { BranchId: 2, BranchNameAr: "فرع جدة", BranchNameEn: "Jeddah Branch", TaxId: 102, Phones: 234567890, Mobiles: 876543210, Website: "https://jeddahbranch.com", Email: "contact@jeddahbranch.com", Address: "456 Jeddah St.", City: "Jeddah", Street: "Queen Road" },
        { BranchId: 3, BranchNameAr: "فرع الدمام", BranchNameEn: "Dammam Branch", TaxId: 103, Phones: 345678901, Mobiles: 765432109, Website: "https://dammambranch.com", Email: "contact@dammambranch.com", Address: "789 Dammam St.", City: "Dammam", Street: "Prince Road" },
        { BranchId: 4, BranchNameAr: "فرع مكة", BranchNameEn: "Makkah Branch", TaxId: 104, Phones: 456789012, Mobiles: 654321098, Website: "https://makkahbranch.com", Email: "contact@makkahbranch.com", Address: "101 Makkah St.", City: "Makkah", Street: "Islamic Road" },
        { BranchId: 5, BranchNameAr: "فرع المدينة", BranchNameEn: "Medina Branch", TaxId: 105, Phones: 567890123, Mobiles: 543210987, Website: "https://medinabranch.com", Email: "contact@medinabranch.com", Address: "202 Medina St.", City: "Medina", Street: "Holy Road" },
        { BranchId: 1, BranchNameAr: "فرع الرياض", BranchNameEn: "Riyadh Branch", TaxId: 101, Phones: 123456789, Mobiles: 987654321, Website: "https://riyadhbranch.com", Email: "contact@riyadhbranch.com", Address: "123 Riyadh St.", City: "Riyadh", Street: "King Road" },
        { BranchId: 2, BranchNameAr: "فرع جدة", BranchNameEn: "Jeddah Branch", TaxId: 102, Phones: 234567890, Mobiles: 876543210, Website: "https://jeddahbranch.com", Email: "contact@jeddahbranch.com", Address: "456 Jeddah St.", City: "Jeddah", Street: "Queen Road" },
        { BranchId: 3, BranchNameAr: "فرع الدمام", BranchNameEn: "Dammam Branch", TaxId: 103, Phones: 345678901, Mobiles: 765432109, Website: "https://dammambranch.com", Email: "contact@dammambranch.com", Address: "789 Dammam St.", City: "Dammam", Street: "Prince Road" },
        { BranchId: 4, BranchNameAr: "فرع مكة", BranchNameEn: "Makkah Branch", TaxId: 104, Phones: 456789012, Mobiles: 654321098, Website: "https://makkahbranch.com", Email: "contact@makkahbranch.com", Address: "101 Makkah St.", City: "Makkah", Street: "Islamic Road" },
        { BranchId: 5, BranchNameAr: "فرع المدينة", BranchNameEn: "Medina Branch", TaxId: 105, Phones: 567890123, Mobiles: 543210987, Website: "https://medinabranch.com", Email: "contact@medinabranch.com", Address: "202 Medina St.", City: "Medina", Street: "Holy Road" },
        { BranchId: 1, BranchNameAr: "فرع الرياض", BranchNameEn: "Riyadh Branch", TaxId: 101, Phones: 123456789, Mobiles: 987654321, Website: "https://riyadhbranch.com", Email: "contact@riyadhbranch.com", Address: "123 Riyadh St.", City: "Riyadh", Street: "King Road" },
        { BranchId: 2, BranchNameAr: "فرع جدة", BranchNameEn: "Jeddah Branch", TaxId: 102, Phones: 234567890, Mobiles: 876543210, Website: "https://jeddahbranch.com", Email: "contact@jeddahbranch.com", Address: "456 Jeddah St.", City: "Jeddah", Street: "Queen Road" },
        { BranchId: 3, BranchNameAr: "فرع الدمام", BranchNameEn: "Dammam Branch", TaxId: 103, Phones: 345678901, Mobiles: 765432109, Website: "https://dammambranch.com", Email: "contact@dammambranch.com", Address: "789 Dammam St.", City: "Dammam", Street: "Prince Road", },
        { BranchId: 4, BranchNameAr: "فرع مكة", BranchNameEn: "Makkah Branch", TaxId: 104, Phones: 456789012, Mobiles: 654321098, Website: "https://makkahbranch.com", Email: "contact@makkahbranch.com", Address: "101 Makkah St.", City: "Makkah", Street: "Islamic Road" },
        { BranchId: 5, BranchNameAr: "فرع المدينة", BranchNameEn: "Medina Branch", TaxId: 105, Phones: 567890123, Mobiles: 543210987, Website: "https://medinabranch.com", Email: "contact@medinabranch.com", Address: "202 Medina St.", City: "Medina", Street: "Holy Road" },
    ]);

    const [colDefs] = useState([
        { field: "BranchId", headerName: t(AppStrings.branchId), filter: 'agNumberColumnFilter' },
        { field: "BranchNameAr", headerName: t(AppStrings.branchNameAr), filter: 'agTextColumnFilter' },
        { field: "BranchNameEn", headerName: t(AppStrings.branchNameEn), filter: 'agTextColumnFilter' },
        { field: "TaxId", headerName: t(AppStrings.taxId), filter: 'agNumberColumnFilter' },
        { field: "Phones", headerName: t(AppStrings.phones), filter: 'agNumberColumnFilter' },
        { field: "Mobiles", headerName: t(AppStrings.mobiles), filter: 'agNumberColumnFilter' },
        { field: "Website", headerName: t(AppStrings.website), filter: 'agTextColumnFilter' },
        { field: "Email", headerName: t(AppStrings.email), filter: 'agTextColumnFilter' },
        { field: "Address", headerName: t(AppStrings.address), filter: 'agTextColumnFilter' },
        { field: "City", headerName: t(AppStrings.city), filter: 'agTextColumnFilter' },
        { field: "Street", headerName: t(AppStrings.street), filter: 'agTextColumnFilter' },
    ]);

    const localeText = AG_GRID_LOCALE_EG;

    const pagination = true;
    const paginationPageSize = 10;
    const paginationPageSizeSelector = [10, 20, 50, 100];

    return (
        <div style={{ width: '100%' }}>
            {/* Search Input */}
            {/* <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearch}
                style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
            /> */}

            {/* Data Grid */}
            <div
                className="ag-theme-quartz"
                style={{ height: '70vh' }}
            >
                <AgGridReact
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                    rowData={rowData}
                    columnDefs={colDefs}
                    domLayout='normal'
                    enableRtl={true}
                    localeText={localeText}
                />
            </div>
        </div>
    );
}

export default ListBranches;

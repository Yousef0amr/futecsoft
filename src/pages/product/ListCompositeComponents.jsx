import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import { useProductColDefs } from '../../config/agGridColConfig';
import useProductManagement from '../../hook/useProductManagement';
import { routes } from '../../utils/constants';

const ListCompositeComponents = () => {
    const [quickFilterText, setQuickFilterText] = useState();
    const { t } = useTranslation();
    const productColDefs = useProductColDefs();
    const { data, isLoading } = useProductManagement();



    return (
        <FormCard icon={faBarcode} title={t(AppStrings.list_composite_components)} navButton={<NavButton icon={faAdd} title={AppStrings.add_new_product} path={routes.product.add} />} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
            </>
        }>
            <AgGridTable
                actionsCellRenderer={NavButton}
                actions={{ icon: faAdd, path: routes.product.compositeComponentsAdd, title: AppStrings.add_new_component }}
                dynamicColumns={productColDefs}
                rowData={data}
                isLoading={isLoading}
                quickFilterText={quickFilterText}
            />
        </FormCard>
    )
}

export default ListCompositeComponents

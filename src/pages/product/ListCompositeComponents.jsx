import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../config/appStrings';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import { useProductColDefs } from '../../config/agGridColConfig';
import useProductManagement from '../../hook/useProductManagement';
import { routes } from '../../config/constants';
import useEntityOperations from '../../hooks/useEntityOperations';

const ListCompositeComponents = () => {
    const [quickFilterText, setQuickFilterText] = useState();
    const { t } = useTranslation();
    const { data, updateEntityInCache, isLoading, updateEntity } = useProductManagement();
    const { handleEntityOperation } = useEntityOperations({ updateEntity });

    const handleActiveChange = (data) => {
        handleEntityOperation({
            operation: 'update',
            data: { ...data, Father: data.CatID, Warehouse: data.Tag, Icon: "..." },
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.product_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    const productColDefs = useProductColDefs({ handleActiveChange });
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

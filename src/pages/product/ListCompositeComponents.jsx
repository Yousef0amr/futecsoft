import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { useGetProductByTypeQuery } from '../../features/productSlice';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import { useProductColDefs } from '../../config/agGridColConfig';

const ListCompositeComponents = () => {
    const [quickFilterText, setQuickFilterText] = useState();
    const { t } = useTranslation();
    const productColDefs = useProductColDefs();
    const { data, isLoading } = useGetProductByTypeQuery({
        pageNumber: 1,
        pageSize: 10,
        branch: '',
        productType: 'Composite',
    });


    const AgGridTableMemo = React.memo(AgGridTable);
    return (
        <FormCard icon={faBarcode} title={t(AppStrings.list_composite_components)} navButton={<NavButton icon={faAdd} title={AppStrings.add_new_product} path={'/products/add'} />} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
            </>
        }>
            {
                <div className='w-100 p-1 mt-4'>
                    <AgGridTableMemo
                        actionsCellRenderer={NavButton}
                        actions={{ icon: faAdd, path: '/products/composite-components/add', title: AppStrings.add_new_component }}
                        dynamicColumns={productColDefs}
                        rowData={data}
                        isLoading={isLoading}
                        quickFilterText={quickFilterText}
                    />
                </div>
            }
        </FormCard>
    )
}

export default ListCompositeComponents

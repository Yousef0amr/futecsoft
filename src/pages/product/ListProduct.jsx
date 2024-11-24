import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
import { useProductColDefs } from '../../config/agGridColConfig';
import useProductManagement from '../../hook/useProductManagement';
import useTableActions from '../../hooks/useTableActions';
import { routes } from '../../utils/constants';
import useEntityOperations from '../../hooks/useEntityOperations';

const ListProduct = () => {
    const { t } = useTranslation();
    const productColDefs = useProductColDefs();
    const [activeTab, setActiveTab] = useState("Raw");
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useProductManagement(activeTab);
    const { handleEntityOperation } = useEntityOperations({ deleteEntity });
    const [quickFilterText, setQuickFilterText] = useState();

    const [loading, setLoading] = useState(true);

    const { defaultActions, active, handleCancel } = useTableActions({
        path: routes.product.edit
    });

    useEffect(() => {
        if (!isLoading) {
            setLoading(false);
        }
    }, [data, isLoading]);

    const handleTabClick = (type) => {
        setActiveTab(type);
        setLoading(true);
    };

    const handleOnDeleteClick = async () => {
        handleEntityOperation({
            operation: "delete",
            data: { Id: active.data.Id },
            cacheUpdater: deleteEntityFromCache(active.data.Id),
            successMessage: AppStrings.product_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
            finalCallback: handleCancel
        })
    };

    return (
        <FormCard
            open={active.isOpen}
            handleDelete={handleOnDeleteClick}
            handleCancel={handleCancel}
            isLoading={isDeleting}
            icon={faBarcode}
            title={t(AppStrings.list_products)}
            navButton={<NavButton icon={'add'} title={AppStrings.add_new_product} path={routes.product.add} />}
            optionComponent={
                <>
                    <TabsSelect handleTabClick={handleTabClick} activeTab={activeTab} />
                    <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
                </>
            }
        >
            <AgGridTable
                actions={defaultActions}
                dynamicColumns={productColDefs}
                rowData={data}
                isLoading={loading}
                quickFilterText={quickFilterText}
            />
        </FormCard>
    );
};

export default ListProduct;

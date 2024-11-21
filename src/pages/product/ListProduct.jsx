import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
import { useProductColDefs } from '../../config/agGridColConfig';
import DeleteComponent from '../../components/common/DeleteComponent';
import useNotification from '../../hooks/useNotification';
import useProductManagement from '../../hook/useProductManagement';
import useTableActions from '../../hooks/useTableActions';
import { routes } from '../../utils/constants';

const ListProduct = () => {
    const { t } = useTranslation();
    const productColDefs = useProductColDefs();
    const { success, error } = useNotification();
    const [activeTab, setActiveTab] = useState("Raw");
    const { data, isLoading, deleteEntity, isDeleting, deleteEntityFromCache } = useProductManagement(activeTab);
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
        try {
            const result = await deleteEntity(active.data.Id).unwrap();
            if (result.Success) {
                deleteEntityFromCache(active.data.Id);
                success(t(AppStrings.product_deleted_successfully));
            } else {
                throw new Error(result.Success);
            }
        } catch (e) {
            error(t(AppStrings.something_went_wrong));
        } finally {
            handleCancel();
        }
    };

    return (
        <FormCard
            open={active.isOpen}
            modelComponent={
                <DeleteComponent
                    handleCancel={handleCancel}
                    handleDelete={handleOnDeleteClick}
                    isLoading={isDeleting}
                />
            }
            icon={faBarcode}
            title={t(AppStrings.list_products)}
            navButton={<NavButton icon={faAdd} title={AppStrings.add_new_product} path={routes.product.add} />}
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

import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from './../../utils/appStrings';
import { useGetProductByTypeQuery, useDeleteProductMutation } from '../../features/productSlice';
import AgGridTable from '../../components/common/AgGridTable';
import FormCard from '../../components/common/FormCard';
import { faAdd, faBarcode } from '@fortawesome/free-solid-svg-icons';
import FilterSearch from '../../components/common/FilterSearch';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
import { useProductColDefs } from '../../config/agGridColConfig';
import { useNotification } from '../../hooks/useNotification';
import Loader from '../../components/common/Loader';
import { useNavigate } from 'react-router-dom';


const ListProduct = () => {
    const { t } = useTranslation();
    const productColDefs = useProductColDefs();
    const [quickFilterText, setQuickFilterText] = useState();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Raw");
    const { data, isLoading } = useGetProductByTypeQuery({
        pageNumber: 1,
        pageSize: 10,
        branch: '',
        productType: activeTab,
    });
    const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!isLoading) {
            setLoading(false);
        }
    }, [data, isLoading]);








    const handleTabClick = (type) => {
        setActiveTab(type);
        setLoading(true);
    };

    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const handleDeleteClick = async (data) => {
        setOpenDeleteModal(true);
        // try {
        //     const result = await deleteProduct(id).unwrap();
        //     if (result.Success) {
        //         success(t(AppStrings.product_deleted_successfully));
        //     } else {
        //         error(t(AppStrings.something_went_wrong));
        //     }
        // } catch (e) {
        //     error(t(AppStrings.something_went_wrong));
        // }
    }

    const handleOnEditClick = (data) => {
        navigate(`/products/edit`, { state: { ...data, type: activeTab } });
    }

    const AgGridTableMemo = React.memo(AgGridTable);

    return (
        <FormCard open={openDeleteModal} handleClose={() => setOpenDeleteModal(false)} icon={faBarcode} title={t(AppStrings.list_products)} navButton={<NavButton icon={faAdd} title={AppStrings.add_new_product} path={'/products/add'} />} optionComponent={
            <>
                <TabsSelect handleTabClick={handleTabClick} activeTab={activeTab} />
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
            </>
        }>
            {
                <div className='w-100 p-1 mt-4'>
                    <AgGridTableMemo
                        actions={{ handleOnEditClick, handleDeleteClick }}
                        dynamicColumns={productColDefs}
                        rowData={data}
                        isLoading={loading}
                        quickFilterText={quickFilterText}
                        handleDeleteClick={handleDeleteClick}
                    />
                </div>
            }
        </FormCard>
    )
}

export default ListProduct

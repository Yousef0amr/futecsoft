import React, { useState } from 'react'
import FormCard from '../../components/common/FormCard'
import ProductForm from '../../components/product/ProductForm'
import { faList, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
import useNotification from '../../hooks/useNotification';
import useProductManagement from '../../hook/useProductManagement';
import { defaultProductValues, routes } from '../../utils/constants';

const AddProduct = () => {
    const { t } = useTranslation();
    const { success, error } = useNotification();
    const [type, setType] = useState('Raw');
    const [defaultValues, setDefaultValues] = useState(defaultProductValues.Raw);

    const { addEntity, isAdding, addEntityToCache } = useProductManagement(type)
    const [reset, setReset] = useState(false);

    const onSubmit = async (data) => {
        let productType = type === 'Composite' ? type : type === 'Raw' ? 'RawMaterial' : 'StandardItem';
        try {
            const result = await addEntity({ type: productType, product: data }).unwrap();
            if (result.Success) {
                setReset(true);
                addEntityToCache(data);
                success(t(AppStrings.product_added_successfully));
            } else {
                throw new Error(result.Success);
            }
        } catch (e) {
            error(t(AppStrings.something_went_wrong));
        }
    }
    const handleTabClick = (type) => {
        setType(type);
        setDefaultValues(() => type === 'Raw' ? defaultProductValues.Raw : defaultProductValues.Composite)
    };

    return (
        <FormCard icon={faBarcode} title={t(AppStrings.add_new_product)} optionComponent={
            <>
                <TabsSelect handleTabClick={handleTabClick} activeTab={type} />
                <NavButton icon={faList} title={AppStrings.list_products} path={routes.product.list} />
            </>
        }  >
            <ProductForm isLoading={isAdding} resetForm={reset} onSubmit={onSubmit} defaultValuesEdit={defaultValues} composite={type === 'Composite'} />
        </FormCard>
    )
}

export default AddProduct

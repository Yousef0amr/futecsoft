import React, { useState } from 'react'
import FormCard from '../../components/common/FormCard'
import ProductForm from '../../components/product/ProductForm'
import { faList, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
import useProductManagement from '../../hook/useProductManagement';
import { defaultProductValues, productTypeFormFields, routes } from '../../utils/constants';
import useEntityOperations from '../../hooks/useEntityOperations';

const AddProduct = () => {
    const { t } = useTranslation();
    const [type, setType] = useState('Raw');
    const [defaultValues, setDefaultValues] = useState(defaultProductValues.Raw);
    const { addEntity, isAdding, addEntityToCache } = useProductManagement(type)
    const { handleEntityOperation } = useEntityOperations({ addEntity });

    const onSubmit = async (data) => {
        let productType = type === 'Composite' ? type : type === 'Raw' ? 'RawMaterial' : 'StandardItem';
        handleEntityOperation({
            operation: 'add',
            data: { type: productType, product: data },
            cacheUpdater: addEntityToCache,
            successMessage: AppStrings.product_added_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }
    const handleTabClick = (type) => {
        setType(type);
        setDefaultValues(() => type === 'Raw' ? defaultProductValues.Raw : defaultProductValues.Composite)
    };

    return (
        <FormCard icon={faBarcode} title={t(AppStrings.add_new_product)} navButton={<NavButton icon={faList} title={AppStrings.list_products} path={routes.product.list} />} optionComponent={
            <>
                <TabsSelect handleTabClick={handleTabClick} activeTab={type} options={productTypeFormFields} />
            </>
        }  >
            <ProductForm isLoading={isAdding} resetForm={!isAdding} onSubmit={onSubmit} defaultValuesEdit={defaultValues} composite={type === 'Composite'} />
        </FormCard>
    )
}

export default AddProduct

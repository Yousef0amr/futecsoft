import React, { useState } from 'react'
import FormCard from '../../components/common/FormCard'
import ProductForm from '../../components/product/ProductForm'
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../config/appStrings';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
import useProductManagement from '../../hook/useProductManagement';
import { defaultProductValues, routes } from '../../config/constants';
import { productTypeFormFields } from '../../config/formFields';
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
        <FormCard icon={faBarcode} title={t(AppStrings.add_new_product)}
            navButton={
                <div className='d-flex gap-3'>
                    {type === 'Composite' && <NavButton icon={"add"} title={AppStrings.add_new_component} path={routes.product.compositeComponents} />}
                    <NavButton icon={"list"} title={AppStrings.list_products} path={routes.product.list} />
                </div>
            } optionComponent={
                <>
                    <TabsSelect handleTabClick={handleTabClick} activeTab={type} options={productTypeFormFields} />
                </>
            }  >
            <ProductForm isLoading={isAdding} resetForm={!isAdding} onSubmit={onSubmit} defaultValuesEdit={defaultValues} composite={type === 'Composite'} />
        </FormCard>
    )
}

export default AddProduct

import React, { useState } from 'react'
import FormCard from '../../components/common/FormCard'
import ProductForm from '../../components/product/ProductForm'
import { faList, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
import { productsApi, useAddProductMutation } from '../../features/productSlice';
import useNotification from '../../hooks/useNotification';
import { useDispatch } from 'react-redux';

const AddProduct = () => {
    const { t } = useTranslation();
    const { success, error } = useNotification();
    const [type, setType] = useState('Raw');
    const [defaultValues, setDefaultValues] = useState({
        Discountable: true,
        IsService: false,
        IsActive: true,
        Saleable: false,
        Taxable: true,
        Price2: 0,
        Price3: 0,
        Price4: 0,
    });

    const [addProduct, { isLoading }] = useAddProductMutation();
    const dispatch = useDispatch();
    const [reset, setReset] = useState(false);

    const onSubmit = async (data) => {
        let productType = type === 'Composite' ? type : type === 'Raw' ? 'RawMaterial' : 'StandardItem';
        try {
            const result = await addProduct({ type: productType, product: data }).unwrap();
            if (result.Success) {
                setReset(true);
                success(t(AppStrings.product_added_successfully));
                try {
                    dispatch(
                        productsApi.util.updateQueryData(
                            'getProductByType',
                            { pageNumber: 1, pageSize: 10, branch: "", productType: type },
                            (draft) => {
                                if (Array.isArray(draft)) {
                                    draft.unshift(data);
                                } else {
                                    throw new Error('Query data is not an array');
                                }
                            }
                        ));
                } catch (error) {
                    console.log(error);
                }
            } else {
                error(t(AppStrings.something_went_wrong));
            }
        } catch (e) {
            error(t(AppStrings.something_went_wrong));
        }
    }
    const handleTabClick = (type) => {
        setType(type);
        if (type === 'Raw') {
            setDefaultValues({
                Discountable: true,
                IsService: false,
                IsActive: true,
                Saleable: false,
                Taxable: true,
                Price2: 0,
                Price3: 0,
                Price4: 0,
            });
        } else {
            setDefaultValues({
                Discountable: true,
                IsService: false,
                IsActive: true,
                Saleable: true,
                Taxable: true,
                Price2: 0,
                Price3: 0,
                Price4: 0,
            });
        }
    };

    return (
        <FormCard icon={faBarcode} title={t(AppStrings.add_new_product)} optionComponent={
            <>
                <TabsSelect handleTabClick={handleTabClick} activeTab={type} />
                <NavButton icon={faList} title={AppStrings.list_products} path={'/products/list'} />
            </>
        }  >
            <ProductForm isLoading={isLoading} restForm={reset} onSubmit={onSubmit} defaultValuesEdit={defaultValues} composite={type === 'Composite'} />
        </FormCard>
    )
}

export default AddProduct

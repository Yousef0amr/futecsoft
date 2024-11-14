import React from 'react'
import FormCard from '../../components/common/FormCard'
import ProductForm from '../../components/product/ProductForm'
import { faList, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
import { useAddProductMutation } from '../../features/productSlice';

const AddProduct = () => {
    const { t } = useTranslation();
    const [addProduct, { isLoading }] = useAddProductMutation();


    const onSubmit = async (data) => {
        try {
            const result = await addProduct(data).unwrap();
            if (result) {
                console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FormCard icon={faBarcode} title={t(AppStrings.add_new_product)} optionComponent={
            <>
                <TabsSelect />
                <NavButton icon={faList} title={AppStrings.list_products} path={'/products/list'} />
            </>
        }  >
            <ProductForm isLoading={null} onSubmit={onSubmit} />
        </FormCard>
    )
}

export default AddProduct

import React from 'react'
import FormCard from '../../components/common/FormCard'
import ProductForm from '../../components/product/ProductForm'
import { faList, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import NavButton from '../../components/common/NavButton';
import TabsSelect from '../../components/common/TabsSelect';
const AddProduct = () => {
    const { t } = useTranslation();

    return (

        <FormCard icon={faBarcode} title={t(AppStrings.add_new_product)} optionComponent={
            <>
                <TabsSelect />
                <NavButton icon={faList} title={AppStrings.list_products} path={'/products/list'} />
            </>
        }  >
            <ProductForm isLoading={null} />
        </FormCard>

    )
}

export default AddProduct

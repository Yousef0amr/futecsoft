import React from 'react'
import { useLocation } from 'react-router-dom'
import FormCard from '../../components/common/FormCard'
import { faArrowRight, faBarcode } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../utils/appStrings'
import { useTranslation } from 'react-i18next'
import NavButton from '../../components/common/NavButton'
import ProductForm from '../../components/product/ProductForm'
import EditComponent from '../../components/common/EditComponent'
import { useDispatch } from 'react-redux'
import { productsApi, useUpdateProductMutation } from '../../features/productSlice'
import useNotification from '../../hooks/useNotification'



const EditProduct = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const distPatch = useDispatch()
    const [updateProduct, { isLoading }] = useUpdateProductMutation()
    const { success, error } = useNotification()

    const onSubmit = async (data) => {
        try {
            const result = await updateProduct(data).unwrap();
            if (result.Success) {
                success(t(AppStrings.product_updated_successfully))
            }
        } catch (e) {
            error(t(AppStrings.something_went_wrong))
        }
    }
    return (
        <EditComponent icon={faBarcode} title={t(AppStrings.edit_product) + '  | ' + loaction.state.Id} path={'/products/list'} >
            <ProductForm isLoading={isLoading} restForm={false} enableReset={false} defaultValuesEdit={{ ...loaction.state, Father: loaction.state.CatID, Warehouse: loaction.state.Tag }} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditProduct

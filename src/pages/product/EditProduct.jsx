import React from 'react'
import { useLocation } from 'react-router-dom'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../utils/appStrings'
import { useTranslation } from 'react-i18next'
import ProductForm from '../../components/product/ProductForm'
import EditComponent from '../../components/common/EditComponent'
import useProductManagement from '../../hook/useProductManagement'
import { routes } from '../../utils/constants'
import useEntityOperations from '../../hooks/useEntityOperations'



const EditProduct = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating } = useProductManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            successMessage: AppStrings.product_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faBarcode} title={t(AppStrings.edit_product) + '  | ' + loaction.state.Id} path={routes.product.list} >
            <ProductForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={{ ...loaction.state, Icon: loaction.state.Icon ? loaction.state.Icon : 'لا يوجد صورة', Father: loaction.state.CatID, Warehouse: loaction.state.Tag }} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditProduct

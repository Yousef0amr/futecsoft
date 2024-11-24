import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { faShuffle, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import EditComponent from '../../components/common/EditComponent'
import BranchForm from '../../components/branch/BranchForm'
import { routes } from '../../utils/constants'
import useCategoryManagement from '../../hook/useCategoryManagement'
import useEntityOperations from '../../hooks/useEntityOperations'
import AppStrings from '../../utils/appStrings'
import { Warehouse } from '@mui/icons-material'
import CategoryForm from '../../components/category/CategoryForm'


const EditCategory = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating, updateEntityInCache } = useCategoryManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: updateEntityInCache(data),
            successMessage: AppStrings.category_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faWindowRestore} title={t(AppStrings.edit_category) + '  | ' + loaction.state.Id} path={routes.category.list} >
            <CategoryForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={{ ...loaction.state, Warehouse: loaction.state.BranchId }} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditCategory

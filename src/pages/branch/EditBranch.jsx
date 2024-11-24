import React from 'react'
import useBranchManagement from '../../hook/useBranchManagement';
import useEntityOperations from '../../hooks/useEntityOperations';
import AppStrings from '../../utils/appStrings';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import EditComponent from '../../components/common/EditComponent';
import BranchForm from '../../components/branch/BranchForm';
import { routes } from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EditBranch = () => {
    const loaction = useLocation()
    const { t } = useTranslation();
    const { updateEntity, isUpdating } = useBranchManagement()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            successMessage: AppStrings.branch_updated_successfully,
            errorMessage: AppStrings.something_went_wrong
        })
    }

    return (
        <EditComponent icon={faShuffle} title={t(AppStrings.edit_branch) + '  | ' + loaction.state.BranchId} path={routes.branch.list} >
            <BranchForm isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={loaction.state} onSubmit={onSubmit} />
        </EditComponent>
    )
}

export default EditBranch

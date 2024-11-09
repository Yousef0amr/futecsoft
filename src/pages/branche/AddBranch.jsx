import React from 'react'
import FormCard from '../../components/common/FormCard'
import BranchForm from '../../components/branch/BranchForm'
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import { useAddBranchMutation } from '../../features/branchesSlice';

const AddBranch = () => {
    const { t } = useTranslation();
    const [addBranch, { isLoading }] = useAddBranchMutation();
    return (
        <FormCard icon={faShuffle} title={t(AppStrings.add_new_branch)}  >
            <BranchForm isLoading={isLoading} />
        </FormCard>
    )
}

export default AddBranch

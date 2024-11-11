import React from 'react'
import FormCard from '../../components/common/FormCard'
import BranchForm from '../../components/branch/BranchForm'
import { faList, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import { useAddBranchMutation } from '../../features/branchesSlice';
import NavButton from '../../components/common/NavButton';

const AddBranch = () => {
    const { t } = useTranslation();
    const [addBranch, { isLoading }] = useAddBranchMutation();
    return (
        <FormCard icon={faShuffle} title={t(AppStrings.add_new_branch)} optionComponent={
            <NavButton icon={faList} title={AppStrings.list_branches} path={'/branches/list'} />
        }  >
            <BranchForm isLoading={isLoading} />
        </FormCard>
    )
}

export default AddBranch

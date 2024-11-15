import React, { useEffect, useState } from 'react'
import FormCard from '../../components/common/FormCard'
import BranchForm from '../../components/branch/BranchForm'
import { faList, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import { useAddBranchMutation, useGetCurrentkeyQuery } from '../../features/branchesSlice';
import NavButton from '../../components/common/NavButton';
import { Button } from 'react-bootstrap';

const AddBranch = () => {
    const { t } = useTranslation();

    const [addBranch, { isLoading, refetch }] = useAddBranchMutation();

    const { data, isLoading: isLoadingKey } = useGetCurrentkeyQuery();
    const [key, setKey] = React.useState({ BranchId: data });

    useEffect(() => {
        if (!isLoadingKey) {
            setKey({ BranchId: data })
        }
    }, [isLoadingKey, data]);

    const onSubmit = async (data) => {
        const branch = {

        };

        console.log(data);
        // try {
        //     const result = await addBranch(data).unwrap();
        //     if (result) {
        //         refetch()
        //     }
        //     console.log(result);
        // } catch (error) {
        //     console.log(error);
        // }
    }

    return (
        <FormCard icon={faShuffle} title={t(AppStrings.add_new_branch)} optionComponent={
            <>
                <NavButton icon={faList} title={AppStrings.list_branches} path={'/branches/list'} />
            </>
        }  >
            <BranchForm isLoading={isLoading} onSubmit={onSubmit} defaultValuesEdit={key} />
        </FormCard>
    )
}

export default AddBranch

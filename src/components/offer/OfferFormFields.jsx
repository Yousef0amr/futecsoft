import React from 'react'
import FormFieldsComponent from '../common/FormFieldsComponent'
import { offersFormFields } from '../../utils/constants'
import useBranchManagement from '../../hook/useBranchManagement'

const OfferFormFields = ({ register, errors, setValue, watch }) => {
    const { data: branchesData, isLoading: isLoadingBranches } = useBranchManagement()

    const branches = !isLoadingBranches
        ? branchesData?.map((item) => ({ value: item.BranchId.toString(), label: item.BranchNameAr }))
        : [];
    return (
        <>
            <FormFieldsComponent errors={errors} register={register} setValue={setValue} options={{ Branch: branches }} watch={watch} fields={offersFormFields} />
        </>
    )
}

export default OfferFormFields

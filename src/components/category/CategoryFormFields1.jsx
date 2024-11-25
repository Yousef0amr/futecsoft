import React from 'react'
import { categoryFormFields as categoryFormFieldsConstants } from '../../utils/constants'
import useBranchManagement from '../../hook/useBranchManagement'
import FormFieldsComponent from '../common/FormFieldsComponent'

const CategoryFormFields = ({ register, errors, setValue, watch }) => {
    const { data: branchesData, isLoading: isLoadingBranches } = useBranchManagement()

    const branches = !isLoadingBranches
        ? branchesData?.map((item) => ({ value: item.BranchId.toString(), label: item.BranchNameAr }))
        : [];

    return (
        <FormFieldsComponent errors={errors} register={register} setValue={setValue} watch={watch} fields={categoryFormFieldsConstants} options={{ Warehouse: branches }} />
    )
}

export default CategoryFormFields
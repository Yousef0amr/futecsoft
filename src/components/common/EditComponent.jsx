import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../utils/appStrings'
import FormCard from './FormCard'
import NavButton from './NavButton'
import useEntityOperations from '../../hooks/useEntityOperations'

const EditComponent = ({ icon, title, successMessage, errorMessage, isRefetch, editData, path, Form, fetchHook, optionComponent }) => {
    const { updateEntity, isUpdating, updateEntityInCache, refetch } = fetchHook()
    const { handleEntityOperation } = useEntityOperations({ updateEntity })

    const onSubmit = async (data) => {
        handleEntityOperation({
            operation: 'update',
            data,
            cacheUpdater: isRefetch ? refetch : updateEntityInCache(data),
            successMessage,
            errorMessage
        })
    }

    return (
        <FormCard open={false} icon={icon} title={title} optionComponent={optionComponent} navButton={<NavButton icon={faArrowRight} title={AppStrings.back} path={path} />}>
            <Form isLoading={isUpdating} resetForm={false} enableReset={false} defaultValuesEdit={editData} onSubmit={onSubmit} />
        </FormCard>
    )
}

export default EditComponent

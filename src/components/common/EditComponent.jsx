import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../utils/appStrings'
import FormCard from './FormCard'
import NavButton from './NavButton'

const EditComponent = ({ icon, title, path, children }) => {



    return (
        <FormCard open={false} icon={icon} title={title} navButton={<NavButton icon={faArrowRight} title={AppStrings.back} path={path} />}>
            {children}
        </FormCard>
    )
}

export default EditComponent

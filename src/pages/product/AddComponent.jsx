import React from 'react'
import CompositeComponentsForm from '../../components/product/CompositeComponentsForm'
import FormCard from '../../components/common/FormCard'
import { faArrowRight, faBarcode } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../utils/appStrings'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import FilterSearch from '../../components/common/FilterSearch'
import NavButton from '../../components/common/NavButton'
import { useLocation } from 'react-router-dom'



const AddComponent = () => {
    const location = useLocation()
    const [quickFilterText, setQuickFilterText] = useState();

    const { t } = useTranslation();
    return (
        <FormCard icon={faBarcode} title={t(AppStrings.list_components)} navButton={<NavButton icon={faArrowRight} title={AppStrings.back} path={'/products/composite-components'} />} optionComponent={
            <>
                <FilterSearch onFilterTextBoxChanged={setQuickFilterText} />
            </>
        }>
            <CompositeComponentsForm quickFilterText={quickFilterText} defaultValuesEdit={location.state.data} />
        </FormCard>
    )
}

export default AddComponent

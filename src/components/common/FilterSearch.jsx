import React from 'react'
import { FormControl } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../utils/appStrings'

const FilterSearch = ({ onFilterTextBoxChanged }) => {
    const { t } = useTranslation()
    return (
        <div >
            <FormControl
                type="text"
                id="filter-text-box"
                placeholder={t(AppStrings.search)}
                onInput={onFilterTextBoxChanged}
                style={{ backgroundColor: 'var(--background-color)' }}
            />
        </div>
    )
}

export default FilterSearch

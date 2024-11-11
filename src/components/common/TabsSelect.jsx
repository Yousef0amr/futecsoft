import React from 'react'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../utils/appStrings'

const TabsSelect = () => {
    const { t } = useTranslation()
    return (
        <div className="radio-inputs">
            <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">{t(AppStrings.finished_materials)}</span>
            </label>
            <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">{t(AppStrings.raw_materials)}</span>
            </label>

            <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">{t(AppStrings.assembled_materials)}</span>
            </label>
        </div>
    )
}

export default TabsSelect

import React from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';


const TabsSelect = ({ handleTabClick, activeTab }) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="radio-inputs">
                <label className="radio">
                    <input
                        type="radio"
                        name="radio"
                        checked={activeTab === "Raw"}
                        onChange={() => handleTabClick("Raw")}
                    />
                    <span className={activeTab === "Raw" ? "name activeTab" : "name"}>
                        {t(AppStrings.raw_materials)}
                    </span>
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        name="radio"
                        checked={activeTab === "Standard"}
                        onChange={() => handleTabClick("Standard")}
                    />
                    <span className={activeTab === "Standard" ? "name activeTab" : "name"}>
                        {t(AppStrings.finished_materials)}
                    </span>
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        name="radio"
                        checked={activeTab === "Composite"}
                        onChange={() => handleTabClick("Composite")}
                    />
                    <span className={activeTab === "Composite" ? "name activeTab" : "name"}>
                        {t(AppStrings.assembled_materials)}
                    </span>
                </label>
            </div>
        </>

    );
};

export default TabsSelect;

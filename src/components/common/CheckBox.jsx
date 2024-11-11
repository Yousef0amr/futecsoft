import React from 'react';
import { useTranslation } from 'react-i18next';

const CheckBox = ({
    label,
    isChecked,
    onChange,
}) => {
    const { t } = useTranslation();

    return (
        <div className={`d-flex align-items-center justify-content-start  gap-3 mt-4`}>
            <div className="cntr">
                <input
                    type="checkbox"
                    id={label}
                    className="hidden-xs-up"
                    checked={isChecked}
                    onChange={(e) => onChange(e.target.checked)}
                    aria-label={label}
                />
                <label htmlFor={label} className="cbx"></label>
            </div>
            <span style={{}}>{t(label)}</span>
        </div>
    );
};


export default CheckBox;

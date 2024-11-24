import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const SelectMenu = ({ options, name, label, watch, onChange, required, errors }) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <FormControl
            className="select-menu mt-3"
            style={{
                width: '100%',
            }}
        >
            <span className="select-label mb-2">{t(label)}{required && <span style={{ color: 'red' }}>*</span>}</span>
            <Select
                labelId={`${label}-select-label`}
                id={`${label}-select`}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={options.some((option) => option.value === watch(name)) ? watch(name) : " "}
                onChange={(event) => {
                    onChange(event);
                }}
                displayEmpty
                style={{
                    backgroundColor: 'var(--background-color)',
                    borderRadius: '10px',
                    height: '35px',
                    padding: '0px 12px',
                    fontSize: '14px',
                    width: '100%',
                    transition: 'box-shadow 0.3s ease',
                    color: 'var(--text-color)',
                    border: '1px solid var(--border-color-2)',
                }}
                IconComponent={(props) => (
                    <ArrowDropDownIcon {...props} style={{ color: 'var(--border-color-2)' }} />
                )}
                MenuProps={{
                    disableScrollLock: true,
                    PaperProps: {
                        style: {
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px var(--row-color)',
                            padding: '5px 0',
                            backgroundColor: 'var(--background-color)',
                        },
                    },
                    MenuListProps: {
                        onClick: (e) => e.stopPropagation(),
                    },
                    disableAutoFocusItem: true,
                }}
            >
                <MenuItem value=" ">
                    {t(`${AppStrings.choose}`) + ' ' + t(label)}
                </MenuItem>

                {options.length > 0 ? (
                    options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem disabled>
                        {t(`${AppStrings.noDataAvailable}`)}
                    </MenuItem>
                )}
            </Select>

            {errors[name] && <div className="error-message">{errors[name].message}</div>}
        </FormControl>
    );
};

SelectMenu.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
};

export default SelectMenu;
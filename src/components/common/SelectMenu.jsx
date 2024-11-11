import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';

const SelectMenu = ({ options, label, value, onChange }) => {
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
            <span className="select-label mb-2">{t(label)}</span>
            <Select
                labelId={`${label}-select-label`}
                id={`${label}-select`}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={value || ''}
                onChange={onChange}
                displayEmpty
                style={{
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    height: '35px',
                    padding: '0px 12px',
                    fontSize: '14px',
                    width: '100%',
                    transition: 'box-shadow 0.3s ease',
                }}
                MenuProps={{
                    disableScrollLock: true,
                    PaperProps: {
                        style: {
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '5px 0',
                        },
                    },
                    MenuListProps: {
                        onClick: (e) => e.stopPropagation(),
                    },
                    disableAutoFocusItem: true,
                }}
            >
                {/* Placeholder option displayed when no item is selected */}
                <MenuItem value="">
                    <em>{t(`${AppStrings.choose}`) + ' ' + t(label)}</em>
                </MenuItem>

                {options.length > 0 ? (
                    options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem disabled>
                        <em>{t('No options available')}</em>
                    </MenuItem>
                )}
            </Select>
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

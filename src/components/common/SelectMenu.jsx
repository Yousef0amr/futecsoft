import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../config/appStrings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Checkbox from '@mui/material/Checkbox';
import SpinnerLoader from '../common/Spinner';
import { useMemo } from 'react';

const SelectMenu = ({
    options,
    name,
    label,
    watch,
    multiple = false,
    onChange,
    required,
    errors,
    isLoading
}) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const selectedValue = useMemo(() => multiple
        ? (Array.isArray(watch(name)) ? watch(name) : [options.length > 0 ? options[0].value : ""])
        : (watch(name) || (options.length > 0 ? options[0].value : "")),
        [options, watch, name, multiple]);


    useEffect(() => {
        if (watch(name) === undefined) {
            onChange({
                target: {
                    name,
                    value: selectedValue,
                },
            });
        }
    }, [watch, onChange, name, selectedValue]);

    const handleChange = (event) => {
        const value = event.target.value;
        onChange({
            target: {
                name,
                value: multiple ? [...value] : value,
            },
        });
    };

    return (
        <FormControl
            className="select-menu mt-3"
            style={{
                width: '100%',
            }}
        >
            <span className="select-label mb-2">
                {t(label)}
                {required && <span style={{ color: 'red' }}>*</span>}
            </span>
            <Select
                labelId={`${label}-select-label`}
                id={`${label}-select`}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={selectedValue || (options.length > 0 ? options[0].value : '')}  // Set the first option as selected by default
                multiple={multiple}
                onChange={handleChange}
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
                <MenuItem value={'' || '-1'} className='d-flex align-items-center gap-2'>
                    {t(`${AppStrings.choose}`) + ' ' + t(label)} {isLoading && <SpinnerLoader />}
                </MenuItem>

                {options.length > 0 ? (
                    options.map((option) => (
                        <MenuItem selected={selectedValue === option.value} key={option.value} value={option.value}>
                            {multiple && (
                                <Checkbox
                                    checked={selectedValue.includes(option.value)}
                                />
                            )}
                            {option.label}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem disabled>
                        {t(`${AppStrings.noDataAvailable}`)}
                    </MenuItem>
                )}
            </Select>


            {/* Error message */}
            {errors[name] && (
                <div className="error-message">{errors[name].message}</div>
            )}
        </FormControl>
    );
};

SelectMenu.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    label: PropTypes.string.isRequired,
    watch: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    errors: PropTypes.object,
};

export default SelectMenu;

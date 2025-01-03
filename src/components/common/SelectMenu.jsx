import React, { useEffect, useMemo, useState } from 'react';
import { FormControl, MenuItem, Select, Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../config/appStrings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SelectMenu = ({
    options,
    name,
    setValue,
    label,
    watch,
    multiple = false,
    onChange,
    required,
    errors,
    isLoading,
}) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const selectedValue = multiple
        ? Array.isArray(watch(name)) ? watch(name) : []
        : watch(name) || (options.length > 0 ? options[0].value : "");

    const menuItems = useMemo(() => (
        options.length > 0 ? (
            options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
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
        )
    ), [options, selectedValue, multiple, t]);

    useEffect(() => {
        if (options.length > 0 && selectedValue !== undefined) {
            if (watch(name) !== selectedValue) {
                setValue(name, selectedValue);
                onChange({
                    target: {
                        name,
                        value: selectedValue,
                    },
                });
            }
        }
    }, [options, selectedValue, name, setValue, onChange, watch]);

    return (
        <FormControl className="select-menu mt-3" style={{ width: '100%' }}>
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
                value={selectedValue}
                multiple={multiple}
                onChange={(event) => {
                    const value = event.target.value;
                    setValue(name, value);
                    onChange({
                        target: {
                            name,
                            value: multiple ? [...value] : value,
                        },
                    });
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
                {!multiple && <MenuItem value="">{t(`${AppStrings.choose}`)}</MenuItem>}
                {menuItems}
            </Select>
            {errors[name] && (
                <div className="error-message">{errors[name].message}</div>
            )}
        </FormControl>
    );
};

export default React.memo(SelectMenu);

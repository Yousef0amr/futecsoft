import React from 'react';
import { Col, Row } from 'react-bootstrap';
import InputField from '../common/InputFiled';
import SelectMenu from '../common/SelectMenu';
import { productFormFields, productSelectFormFields } from '../../utils/constants';
import { useGetCategoriesQuery } from '../../features/categorySlice';
import { useGetBranchesQuery } from '../../features/branchesSlice';
import { useLazyGetCurrentProductkeyQuery } from '../../features/productSlice';
import { useGetTaxesQuery } from '../../features/taxSlice';
import { useGetUnitsQuery } from '../../features/unitSlice';

const ProductFormFields1 = ({ register, errors, watch, setValue }) => {

    const { data: categoriesData, isLoading: isLoadingCategories } = useGetCategoriesQuery({ pageNumber: 1, pageSize: 10 });
    const { data: branchesData, isLoading: isLoadingBranches } = useGetBranchesQuery({ pageNumber: 1, pageSize: 10 });
    const { data: taxesData, isLoading: isLoadingTaxes } = useGetTaxesQuery({ pageNumber: 1, pageSize: 10 });
    const { data: unitsData, isLoading: isLoadingUnits } = useGetUnitsQuery({ pageNumber: 1, pageSize: 10 });

    const categories = !isLoadingCategories
        ? categoriesData.map((item) => ({ value: item.CatID, label: item.Cat_AR_Name }))
        : [];

    const branches = !isLoadingBranches
        ? branchesData.map((item) => ({ value: item.BranchId.toString(), label: item.BranchNameAr }))
        : [];

    const taxes = !isLoadingTaxes
        ? taxesData.map((item) => ({ value: item.TaxId, label: item.TaxAr }))
        : [];

    const units = !isLoadingUnits
        ? unitsData.map((item) => ({ value: item.UnitId, label: item.UnitAr }))
        : [];



    const [triggerGetCurrentProductkey, { data: productKey, isLoading: isLoadingKey }] = useLazyGetCurrentProductkeyQuery();

    React.useEffect(() => {
        if (!isLoadingKey && productKey) {
            setValue('Id', productKey);
            setValue('Barcode', productKey);
        }
    }, [isLoadingKey, productKey, setValue]);

    const onSelectChange = (value, name) => {
        setValue(name, value);
        if (name === 'Father') {
            triggerGetCurrentProductkey(value);
        }
    };

    return (
        <Col>
            <Row>
                {productFormFields.map((field) => (
                    <Col xs={12} md={6} key={field.name}>
                        <InputField
                            name={field.name}
                            label={field.label}
                            register={register}
                            errors={errors}
                            required={field.required}
                            type={field.type}
                            disabled={field.name === 'Id'}
                            min={0}
                        />
                    </Col>
                ))}
            </Row>
            <Row>
                {productSelectFormFields.map((field) => (
                    <Col xs={12} md={6} key={field.name}>
                        <SelectMenu
                            watch={watch}
                            onChange={(e) => onSelectChange(e.target.value, field.name)}
                            errors={errors}
                            name={field.name}
                            options={
                                field.name === 'Warehouse' ?
                                    branches : field.name === 'Father' ?
                                        categories : field.name === 'TaxPercentage' ?
                                            taxes : units
                            }
                            label={field.label}
                            required={field.required}
                        />
                    </Col>
                ))}
            </Row>
        </Col>
    );
};

export default ProductFormFields1;

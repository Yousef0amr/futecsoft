import React, { useState } from 'react'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../config/appStrings'
import { useTranslation } from 'react-i18next'
import useEntityOperations from '../../hooks/useEntityOperations'
import FormCard from '../common/FormCard'
import { useInvoiceItemsManagement } from '../../hook/useInvoiceManagement'
import useUnitManagement from '../../hook/useUnitManagement'
import { useInvoicesItemsColDefs } from '../../config/agGridColConfig';
import TableWithCRUD from '../common/TableWithCRUD'
import { useGetStandardAndRawMaterialsQuery, useGetProductUnitsByIdQuery } from '../../features/productSlice'

import Loader from '../common/Loader'
import { Button } from 'react-bootstrap'
const ListInvoiceItems = ({ invoice }) => {
    const { data, isLoading, addEntity, updateEntity, deleteEntityFromCache, deleteEntity, isDeleting, refetch } = useInvoiceItemsManagement({ id: invoice.DocID });
    const { data: allUnits } = useUnitManagement();
    const { t, } = useTranslation();
    const { handleEntityOperation } = useEntityOperations({ addEntity, updateEntity, deleteEntity });


    const [selectedItem, setSelectedItem] = useState(null);

    const { data: productsData, isLoading: isLoadingProducts } = useGetStandardAndRawMaterialsQuery(
        invoice.Warehouse ? {
            Warehouse: invoice.Warehouse,
            pageNumber: 1,
            pageSize: 100
        } : null,
        {
            skip: !invoice.Warehouse
        }
    );

    const { data: unitsData, isLoading: isLoadingUnits } = useGetProductUnitsByIdQuery(
        selectedItem ? selectedItem : null,
        {
            skip: !selectedItem
        }
    );
    const [infoOpen, setInfoOpen] = React.useState(false);



    const units = !isLoadingUnits
        ? allUnits?.map((item) => ({ value: item.UnitID, label: item.Unit_AR }))
        : [];

    const products = !isLoadingProducts
        ? productsData?.map((item) => ({ value: item.Id, label: item.NameAr }))
        : [];

    const onSubmit = async (data) => {
        const operationType = data.isNew ? "add" : "update";
        setInfoOpen(false);
        return await handleEntityOperation({
            operation: operationType,
            data: { ...invoice, UnitPrice: data.UnitPrice, Qty: data.Qty, ItemId: data.ItemID, Unit: data.UnitID, ItemDiscountPercentage: data.DiscountPercentage, ItemDiscount: data.Discount },
            cacheUpdater: refetch,
            successMessage: operationType === "update"
                ? AppStrings.product_updated_successfully
                : AppStrings.product_added_successfully,
            errorMessage: operationType === "add"
                ? AppStrings.something_went_wrong
                : AppStrings.material_already_added,
        });
    };

    const handleOnDeleteClick = async (data) => {
        return await handleEntityOperation({
            operation: "delete",
            data: { ItemId: data.ItemID, DocID: invoice.DocID, Warehouse: invoice.Warehouse, Unit: data.UnitID },
            cacheUpdater: deleteEntityFromCache(data.ItemID),
            successMessage: AppStrings.product_deleted_successfully,
            errorMessage: AppStrings.something_went_wrong,
        })
    };


    const columns = useInvoicesItemsColDefs({
        products, units, getSelectedVaule: (value) => {
            setSelectedItem(value);
            setInfoOpen(true);
        }
    })

    if (isLoadingProducts) {
        return <Loader />;
    }

    return (
        <FormCard icon={faBarcode} title={t(AppStrings.list_products)} >
            {!isLoadingProducts && <TableWithCRUD
                info={
                    infoOpen && <div className='fs-6 d-flex align-items-center  gap-2'>
                        <p className='mb-0'>
                            {
                                t(AppStrings.units_can_used)
                            }
                        </p>
                        <div className='d-flex gap-2'>
                            {
                                unitsData?.map((item) =>
                                    <Button disabled classsName='fw-bold fs-6' variant='danger' size='sm' key={item.UnitId
                                    }>{item.UnitAr}</Button>
                                )
                            }
                        </div>
                    </div>
                }
                setInfoOpen={setInfoOpen}
                isLoading={isLoading}
                isDeleting={isDeleting}
                handleOnDeleteClick={handleOnDeleteClick}
                onSubmit={onSubmit}
                columns={columns}
                initialRows={data} />}
        </FormCard>
    )
}

export default ListInvoiceItems



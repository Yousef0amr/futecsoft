import React from 'react'
import ListComponent from '../../components/common/ListComponent'
import useVoucherTransferManagement from '../../hook/useVoucherTransferManagement'
import { useVoucherInputColDefs } from '../../config/agGridColConfig'
import { routes } from '../../config/constants'
import { faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../config/appStrings'

const ListTransferVoucher = () => {
    return (
        <ListComponent
            entityName="voucher_transfer"
            entityKey="DocNo"
            fetchHook={useVoucherTransferManagement}
            columnDefsHook={useVoucherInputColDefs}
            routes={routes.input_voucher}
            icon={faTruckArrowRight}
            deleteSuccessMessage={AppStrings.invoice_deleted_successfully}
            deleteErrorMessage={AppStrings.something_went_wrong}
            formTitle={AppStrings.list_invoices}
            addButtonTitle={AppStrings.add_new_invoice}
        />
    )
}

export default ListTransferVoucher

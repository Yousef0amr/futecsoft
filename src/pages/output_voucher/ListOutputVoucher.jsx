import React from 'react'
import ListComponent from '../../components/common/ListComponent'
import useVoucherOutputManagement from '../../hook/useVoucherOutputManagement'
import { useVoucherInputColDefs } from '../../config/agGridColConfig'
import { routes } from '../../config/constants'
import { faTruckArrowRight, faTruckFront } from '@fortawesome/free-solid-svg-icons'
import AppStrings from '../../config/appStrings'

const ListOutputVoucher = () => {
    return (
        <ListComponent
            entityName="voucher_output"
            entityKey="DocNo"
            fetchHook={useVoucherOutputManagement}
            columnDefsHook={useVoucherInputColDefs}
            routes={routes.output_voucher}
            icon={faTruckFront}
            deleteSuccessMessage={AppStrings.invoice_deleted_successfully}
            deleteErrorMessage={AppStrings.something_went_wrong}
            formTitle={AppStrings.list_invoices}
            addButtonTitle={AppStrings.add_new_invoice}
        />
    )
}

export default ListOutputVoucher

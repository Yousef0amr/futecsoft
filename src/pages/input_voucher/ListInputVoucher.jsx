import React from 'react'
import ListComponent from '../../components/common/ListComponent'
import AppStrings from '../../config/appStrings'
import { routes } from '../../config/constants'
import { faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import useVoucherInputManagement from '../../hook/useVoucherInputManagement'
import { useVoucherInputColDefs } from '../../config/agGridColConfig'

const ListInputVoucher = () => {
    return (
        <ListComponent
            entityName="voucher_input"
            entityKey="DocID"
            fetchHook={useVoucherInputManagement}
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

export default ListInputVoucher
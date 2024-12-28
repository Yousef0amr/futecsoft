import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import ReportsLayout from '../layout/ReportsLayout'
import { ProtectedRoute, LoginRoute } from './../components/common/ProtectedRoute'
import Login from '../pages/Login'
import AddBranch from '../pages/branch/AddBranch'
import Home from '../pages/Home'
import ListProduct from '../pages/product/ListProduct'
import AddProduct from '../pages/product/AddProduct'
import ListCompositeComponents from '../pages/product/ListCompositeComponents'
import PricesAndCosts from '../pages/product/PricesAndCosts'
import Loader from '../components/common/Loader'
import AddComponent from '../pages/product/AddComponent'
import EditProduct from '../pages/product/EditProduct'
import { routes } from '../config/constants'
import EditBranch from '../pages/branch/EditBranch'
import ListBranch from '../pages/branch/ListBranch'
import ListCategory from '../pages/category/ListCategory'
import AddCategory from '../pages/category/AddCategory'
import EditCategory from '../pages/category/EditCategory'
import ListUnit from '../pages/unit/ListUnit'
import AddUnit from '../pages/unit/AddUnit'
import EditUnit from '../pages/unit/EditUnit'
import ListFlavor from '../pages/flavor/ListFlavor'
import AddFlavor from '../pages/flavor/AddFlavor'
import EditFlavor from '../pages/flavor/EditFlavor'
import ListOffer from '../pages/offer/ListOffer'
import AddOffer from '../pages/offer/AddOffer'
import EditOffer from '../pages/offer/EditOffer'
import AddDiscount from '../pages/discount/AddDiscount'
import ListDiscount from '../pages/discount/ListDiscount'
import EditDiscount from '../pages/discount/EditDiscount'
import ListTax from '../pages/tax/ListTax'
import AddTax from '../pages/tax/AddTax'
import EditTax from '../pages/tax/EditTax'
import ListCurreny from '../pages/Currency/ListCurreny'
import EditCurrency from '../pages/Currency/EditCurrency'
import AddCurrency from '../pages/Currency/AddCurrency'
import ListPaymentType from '../pages/payment_type/ListPaymentType'
import AddPaymentType from '../pages/payment_type/AddPaymentType'
import EditPaymentType from '../pages/payment_type/EditPaymentType'
import ListSupplier from '../pages/supplier/ListSupplier'
import AddSupplier from '../pages/supplier/AddSupplier'
import EditSupplier from '../pages/supplier/EditSupplier'
import ListDeliveryCompany from '../pages/delivery_company/ListDeliveryCompany'
import AddDeliveryCompany from '../pages/delivery_company/AddDeliveryCompany'
import EditDeliveryCompany from '../pages/delivery_company/EditDeliveryCompany'
import ListDeliveryDiscount from '../pages/delivery_discount/ListDeliveryDiscount'
import AddDeliveryDiscount from '../pages/delivery_discount/AddDeliveryDiscount'
import EditDeliveryDiscount from '../pages/delivery_discount/EditDeliveryDiscount'
import ListUserGroup from '../pages/user_group/ListUserGroup'
import AddUserGroup from '../pages/user_group/AddUserGroup'
import EditUserGroup from '../pages/user_group/EditUserGroup'
import ListUser from '../pages/user/ListUser'
import AddUser from '../pages/user/AddUser'
import EditUser from '../pages/user/EditUser'
import EditUserPermission from '../pages/user_permission/EditUserPermission'
import ListUserPermission from '../pages/user_permission/ListUserPermission'
import ListInvoice from '../pages/invoice/ListInvoice'
import AddInvoice from '../pages/invoice/AddInvoice'
import EditInvoice from '../pages/invoice/EditInvoice'
import ListInputVoucher from '../pages/input_voucher/ListInputVoucher'
import AddInputVoucher from '../pages/input_voucher/AddInputVoucher'
import EditInputVoucher from '../pages/input_voucher/EditInputVoucher'
import ListOutputVoucher from '../pages/output_voucher/ListOutputVoucher'
import AddOutputVoucher from '../pages/output_voucher/AddOutputVoucher'
import EditOutputVoucher from '../pages/output_voucher/EditOutputVoucher'
import ListTransferVoucher from '../pages/transfer_voucher/ListTransferVoucher'
import AddTransferVoucher from '../pages/transfer_voucher/AddTransferVoucher'
import EditTransferVoucher from '../pages/transfer_voucher/EditTransferVoucher'
import InvoicesByDate from '../pages/report/InvoicesByDate'






const pagesList = [
    { path: "/", component: <Home /> },
    // Branches
    { path: routes.branch.list, component: <ListBranch /> },
    { path: routes.branch.add, component: <AddBranch /> },
    { path: routes.branch.edit, component: <EditBranch /> },
    // Products
    { path: routes.product.list, component: <ListProduct /> },
    { path: routes.product.add, component: <AddProduct /> },
    { path: routes.product.edit, component: <EditProduct /> },
    { path: routes.product.compositeComponents, component: <ListCompositeComponents /> },
    { path: routes.product.compositeComponentsAdd, component: <AddComponent /> },
    { path: routes.product.pricesAndCosts, component: <PricesAndCosts /> },
    // Categories
    { path: routes.category.list, component: <ListCategory /> },
    { path: routes.category.add, component: <AddCategory /> },
    { path: routes.category.edit, component: <EditCategory /> },
    // Units
    { path: routes.unit.list, component: <ListUnit /> },
    { path: routes.unit.add, component: <AddUnit /> },
    { path: routes.unit.edit, component: <EditUnit /> },
    // Flavors
    { path: routes.flavor.list, component: <ListFlavor /> },
    { path: routes.flavor.add, component: <AddFlavor /> },
    { path: routes.flavor.edit, component: <EditFlavor /> },
    // Offers
    { path: routes.offer.list, component: <ListOffer /> },
    { path: routes.offer.add, component: <AddOffer /> },
    { path: routes.offer.edit, component: <EditOffer /> },
    // Discounts
    { path: routes.discountType.list, component: <ListDiscount /> },
    { path: routes.discountType.add, component: <AddDiscount /> },
    { path: routes.discountType.edit, component: <EditDiscount /> },
    // Taxes
    { path: routes.tax.list, component: <ListTax /> },
    { path: routes.tax.add, component: <AddTax /> },
    { path: routes.tax.edit, component: <EditTax /> },
    // Currencies
    { path: routes.currency.list, component: <ListCurreny /> },
    { path: routes.currency.add, component: <AddCurrency /> },
    { path: routes.currency.edit, component: <EditCurrency /> },
    // Payment Methods
    { path: routes.paymentMethod.list, component: <ListPaymentType /> },
    { path: routes.paymentMethod.add, component: <AddPaymentType /> },
    { path: routes.paymentMethod.edit, component: <EditPaymentType /> },
    // Suppliers
    { path: routes.supplier.list, component: <ListSupplier /> },
    { path: routes.supplier.add, component: <AddSupplier /> },
    { path: routes.supplier.edit, component: <EditSupplier /> },
    // Delivery Companies
    { path: routes.delivery_company.list, component: <ListDeliveryCompany /> },
    { path: routes.delivery_company.add, component: <AddDeliveryCompany /> },
    { path: routes.delivery_company.edit, component: <EditDeliveryCompany /> },

    // Delivery Discounts
    { path: routes.delivery_discount.list, component: <ListDeliveryDiscount /> },
    { path: routes.delivery_discount.add, component: <AddDeliveryDiscount /> },
    { path: routes.delivery_discount.edit, component: <EditDeliveryDiscount /> },
    //User Groups
    { path: routes.user_group.list, component: <ListUserGroup /> },
    { path: routes.user_group.add, component: <AddUserGroup /> },
    { path: routes.user_group.edit, component: <EditUserGroup /> },
    //Users
    { path: routes.user.list, component: <ListUser /> },
    { path: routes.user.add, component: <AddUser /> },
    { path: routes.user.edit, component: <EditUser /> },
    //User Permissions
    { path: routes.permission.edit, component: <EditUserPermission /> },
    { path: routes.permission.list, component: <ListUserPermission /> },
    //Invoices
    { path: routes.invoice.list, component: <ListInvoice /> },
    { path: routes.invoice.add, component: <AddInvoice /> },
    { path: routes.invoice.edit, component: <EditInvoice /> },
    //Input Vouchers
    { path: routes.input_voucher.list, component: <ListInputVoucher /> },
    { path: routes.input_voucher.add, component: <AddInputVoucher /> },
    { path: routes.input_voucher.edit, component: <EditInputVoucher /> },
    //Output Vouchers
    { path: routes.output_voucher.list, component: <ListOutputVoucher /> },
    { path: routes.output_voucher.add, component: <AddOutputVoucher /> },
    { path: routes.output_voucher.edit, component: <EditOutputVoucher /> },
    //Transfer Vouchers
    { path: routes.transfer_voucher.list, component: <ListTransferVoucher /> },
    { path: routes.transfer_voucher.add, component: <AddTransferVoucher /> },
    { path: routes.transfer_voucher.edit, component: <EditTransferVoucher /> },

];

const reportsPages = [
    // { path: routes.reports.fullSales, component: <FullSales /> },
    // { path: routes.reports.salesCategory, component: <SalesCategory /> },
    // { path: routes.reports.salesItems, component: <SalesItems /> },
    // { path: routes.reports.salesCashier, component: <SalesCashier /> },
    // { path: routes.reports.bestSellerItems, component: <BestSellerItems /> },
    // { path: routes.reports.bestSellerCategory, component: <BestSellerCategory /> },
    // { path: routes.reports.salesByDays, component: <SalesByDays /> },
    // { path: routes.reports.salesByHours, component: <SalesByHours /> },
    // { path: routes.reports.salesmanSales, component: <SalesmanSales /> },
    // { path: routes.reports.returnInvoices, component: <ReturnInvoices /> },
    // { path: routes.reports.returnItems, component: <ReturnItems /> },
    { path: routes.reports.invoicesByDate, component: <InvoicesByDate /> },
    // { path: routes.reports.itemTransaction, component: <ItemTransaction /> },
    // { path: routes.reports.inventoryStatement, component: <InventoryStatement /> },
    // { path: routes.reports.dailyProfit, component: <DailyProfit /> },
    // { path: routes.reports.itemsProfits, component: <ItemsProfits /> },
    // { path: routes.reports.itemSalesTransaction, component: <ItemSalesTransaction /> },
    // { path: routes.reports.fullSalesWithDetails, component: <FullSalesWithDetails /> },
]



const AppRoutes = ({ darkMode, toggleDarkMode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes >
                <Route element={<ProtectedRoute />} >
                    <Route path="/" element={<DefaultLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} >
                        {
                            pagesList.map((page, index) => {
                                return (
                                    <Route key={index} path={page.path} element={page.component} />
                                )
                            })

                        }
                        <Route path="/reports" element={<ReportsLayout />} >
                            {
                                reportsPages.map((page, index) => {
                                    return (
                                        <Route key={index} path={page.path} element={page.component} />
                                    )
                                })
                            }
                        </Route>

                    </Route>
                </Route>
                <Route element={<LoginRoute />} >
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="*" element={<h3>Page Not Found</h3>} />
            </Routes>
        </Suspense>

    )
}

export default AppRoutes

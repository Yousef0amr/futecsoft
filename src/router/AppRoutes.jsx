import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
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
import { routes } from '../utils/constants'
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
    { path: routes.currency.list, component: <ListFlavor /> },
    { path: routes.currency.add, component: <AddFlavor /> },
    { path: routes.currency.edit, component: <EditFlavor /> },
    // Payment Methods
    { path: routes.paymentMethod.list, component: <ListFlavor /> },
    { path: routes.paymentMethod.add, component: <AddFlavor /> },
    { path: routes.paymentMethod.edit, component: <EditFlavor /> },
    // Suppliers
    { path: routes.supplier.list, component: <ListFlavor /> },
    { path: routes.supplier.add, component: <AddFlavor /> },
    { path: routes.supplier.edit, component: <EditFlavor /> },
];

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

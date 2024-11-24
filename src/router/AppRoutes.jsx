import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import { ProtectedRoute, LoginRoute } from './../components/common/ProtectedRoute'
import Login from '../pages/Login'
import ListBranches from '../pages/branche/ListBranches'
import AddBranch from '../pages/branche/AddBranch'
import Home from '../pages/Home'
import ListProduct from '../pages/product/ListProduct'
import AddProduct from '../pages/product/AddProduct'
import ListCompositeComponents from '../pages/product/ListCompositeComponents'
import PricesAndCosts from '../pages/product/PricesAndCosts'
import Loader from '../components/common/Loader'
import AddComponent from '../pages/product/AddComponent'
import EditProduct from '../pages/product/EditProduct'
import { routes } from '../utils/constants'

const AppRoutes = ({ darkMode, toggleDarkMode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes >
                <Route element={<ProtectedRoute />} >
                    <Route path="/" element={<DefaultLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} >
                        <Route index element={<Home />} />
                        <Route path={routes.branch.list} element={<ListBranches />} />
                        <Route path={routes.branch.add} element={<AddBranch />} />
                        <Route path={routes.product.list} element={<ListProduct />} />
                        <Route path={routes.product.add} element={<AddProduct />} />
                        <Route path={routes.product.edit} element={<EditProduct />} />
                        <Route path={routes.product.compositeComponents} element={<ListCompositeComponents />} />
                        <Route path={routes.product.compositeComponentsAdd} element={<AddComponent />} />
                        <Route path={routes.product.pricesAndCosts} element={<PricesAndCosts />} />

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

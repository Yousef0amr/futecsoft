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
import GetBranchKey from '../components/branch/GetBranchKey'
import ListCompositeComponents from '../pages/product/ListCompositeComponents'
import PricesAndCosts from '../pages/product/PricesAndCosts'
import Loader from '../components/common/Loader'
import AddComponent from '../pages/product/AddComponent'
import EditProduct from '../pages/product/EditProduct'

const AppRoutes = ({ darkMode, toggleDarkMode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes >
                <Route element={<ProtectedRoute />} >
                    <Route path="/" element={<DefaultLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} >
                        <Route index element={<Home />} />
                        <Route path='/branches/list' element={<ListBranches />} />
                        <Route path='/branches/add' element={<GetBranchKey />} />
                        <Route path='/products/list' element={<ListProduct />} />
                        <Route path='/products/add' element={<AddProduct />} />
                        <Route path='/products/edit' element={<EditProduct />} />
                        <Route path='/products/composite-components' element={<ListCompositeComponents />} />
                        <Route path='/products/composite-components/add' element={<AddComponent />} />
                        <Route path='/products/prices-and-costs' element={<PricesAndCosts />} />

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

import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import { ProtectedRoute, LoginRoute } from './../components/common/ProtectedRoute'
import Login from '../pages/Login'
import ListBranches from '../pages/branche/ListBranches'
import AddBranch from '../pages/branche/AddBranch'
import ListProduct from '../pages/product/ListProduct'
import AddProduct from '../pages/product/AddProduct'
import GetBranchKey from '../components/branch/GetBranchKey'

const AppRoutes = ({ darkMode, toggleDarkMode }) => {


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes >
                <Route element={<ProtectedRoute />} >
                    <Route path="/" element={<DefaultLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} >
                        <Route index element={<h3>Home</h3>} />

                        <Route path='/branches/list' element={<ListBranches />} />
                        <Route path='/branches/add' element={<GetBranchKey />} />
                        <Route path='/products/list' element={<ListProduct />} />
                        <Route path='/products/add' element={<AddProduct />} />

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

import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'


const AppRoutes = () => {


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes >
                <Route path="/" element={<DefaultLayout />} >
                    <Route index element={<h3>Home</h3>} />
                </Route>
                <Route path="*" element={<h3>Page Not Found</h3>} />
            </Routes>
        </Suspense>

    )
}

export default AppRoutes

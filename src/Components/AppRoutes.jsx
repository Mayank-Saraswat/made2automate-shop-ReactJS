import React from 'react'
import { Route, Routes } from "react-router-dom"
import Counters from './Counters'
import Orders from './Orders'
import Leads from './Leads'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Counters />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/leads" element={<Leads />} />
        </Routes>
    )
}

export default AppRoutes
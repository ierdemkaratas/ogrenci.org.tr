import React from 'react'
import AnaSayfa from '../pages/AnaSayfa'
import { Route, Routes } from 'react-router-dom'

export default function CustomRouter() {
    return (
        <Routes>
            <Route path="/" element={<AnaSayfa />} />
        </Routes>
    )
}

import React from 'react'
import AnaSayfa from '../pages/AnaSayfa'
import { HashRouter, Routes, Route } from 'react-router-dom'

export default function CustomRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
      </Routes>
    </HashRouter>
  )
}

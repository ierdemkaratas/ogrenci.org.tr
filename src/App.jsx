import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomRouter from '../src/routes/Routes'
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomRouter></CustomRouter>
      </BrowserRouter>
    </>
  )
}

export default App

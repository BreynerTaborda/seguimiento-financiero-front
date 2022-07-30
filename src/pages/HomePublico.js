import React from 'react'
import Login from './login/Login'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AgregarMovimiento from '../components/movimientos/agregarMovimiento/AgregarMovimiento'

const HomePublico = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/movimiento/agregar' element={<AgregarMovimiento />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default HomePublico
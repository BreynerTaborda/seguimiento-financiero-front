import React from 'react'
import Login from './login/Login'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AgregarMovimiento from './movimientos/agregarMovimiento/AgregarMovimiento'
import ListarMovimientos from './movimientos/listarMovimientos/ListarMovimientos'


const HomePublico = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/movimientos/agregar' element={<AgregarMovimiento />} />
            <Route path='/movimientos/lista' element={<ListarMovimientos />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default HomePublico
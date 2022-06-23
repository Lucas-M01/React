import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../src/Pages/HomePage'
import PaginaBackEnd from '../src/Pages/Back-end'
import PaginaFrontEnd from '../src/Pages/Front-end'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/front-end" element={<PaginaFrontEnd/>}/>
                <Route path="/back-end" element={<PaginaBackEnd/>}/>
            </Routes>
        </BrowserRouter>
    )

}
import React from "react";
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Repositories from "./Repositories";
import Home from "./Home";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/repositories' element={<Repositories/>}/>
            </Routes>
        </BrowserRouter>
    )
}
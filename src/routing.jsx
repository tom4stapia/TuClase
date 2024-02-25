import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

export default function Routing () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
        </Routes>
        </BrowserRouter>
    );
}
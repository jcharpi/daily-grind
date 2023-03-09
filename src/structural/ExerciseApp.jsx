import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";

import MapPage from "../pages/MapPage";
import SelectPage from "../pages/SelectPage";

export default function ExerciseApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/select" element={<SelectPage/>}></Route>
                <Route path="/map" element={<MapPage/>}></Route>
                <Route path="*" element={<p>No Match...</p>} />
            </Routes>
        </BrowserRouter>
    )
}


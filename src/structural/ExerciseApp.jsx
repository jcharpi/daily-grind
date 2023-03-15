import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import SelectPage from "../pages/SelectPage";
import { useState } from "react";
import MinutesToTravelContext from "../contexts/MinutesToTravelContext"

export default function ExerciseApp() {

    const [minutes, setMinutes] = useState(10)

    return (
        <MinutesToTravelContext.Provider value={[minutes, setMinutes]}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/select" element={<SelectPage/>}></Route>
                    <Route path="/map" element={<MapPage/>}></Route>
                    <Route path="*" element={<p>No Match...</p>} />
                </Routes>
            </BrowserRouter>
        </MinutesToTravelContext.Provider>
        
    )
}


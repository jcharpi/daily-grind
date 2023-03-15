import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import SelectPage from "../pages/SelectPage";
import { useState } from "react";
import MinutesToTravelContext from "../contexts/MinutesToTravelContext"
import TripTypeContext from '../contexts/TripTypeContext';

export default function ExerciseApp() {

    const [minutes, setMinutes] = useState(0)
    const [type, setType] = useState("Walk")

    return (
        <MinutesToTravelContext.Provider value={[minutes, setMinutes]}>
            <TripTypeContext.Provider value={[type, setType]}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/select" element={<SelectPage/>}></Route>
                        <Route path="/map" element={<MapPage/>}></Route>
                        <Route path="*" element={<p>No Match...</p>} />
                    </Routes>
                </BrowserRouter>
            </TripTypeContext.Provider>
        </MinutesToTravelContext.Provider>
        
    )
}


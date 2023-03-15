import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import SelectPage from "../pages/SelectPage";
import { useEffect } from "react";

export default function ExerciseApp() {

    useEffect(() => {
        if (!localStorage.getItem("minutes")) {
          localStorage.setItem("minutes", "0");
        }
      }, []);

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


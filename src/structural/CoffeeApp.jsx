import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import SelectPage from "../pages/SelectPage";
import { useEffect } from "react";
import NoMatch from '../pages/NoLocation';

export default function CoffeeApp() {

    useEffect(() => {
        if (!localStorage.getItem("minutes")) {
          localStorage.setItem("minutes", "0");
        }
      }, []);

    return (
        <HashRouter>
            <Routes>
                <Route path="/"  element={<HomePage />} />
                <Route path="/select" element={<SelectPage/>}></Route>
                <Route path="/map" element={<MapPage/>}></Route>
                <Route path="/no-location" element={<NoMatch/>}></Route>
                <Route path="*" element={<p>No Match...</p>} />
            </Routes>
        </HashRouter> 
    )
}
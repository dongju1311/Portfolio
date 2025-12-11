import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BicyclePage from "@/pages/BicyclePage";
import SkillPage from "@/pages/SkillPage.jsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/bicycle" element={<BicyclePage />} />
            <Route path="/skill" element={<SkillPage/>}/>
        </Routes>
    );
}

export default App;
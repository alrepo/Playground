import React from "react";
import Home from "./Home";
import Illustration from "./Illustration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/illustration" element={<Illustration />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
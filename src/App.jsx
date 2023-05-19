import React from "react";
import Home from "./Home";
import Jobs from "./Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
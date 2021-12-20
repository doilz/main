import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Calc from "./Calc";
import Goalclass from "./Goalclass";
import GoalclassCopy from "./GoalclassCopy";

export default function Routerwork() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/Calc" element={<Calc />} />
                    <Route path="/Goalclass" element={<Goalclass />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
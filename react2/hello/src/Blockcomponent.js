import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Home from "./Home";
import About from "./pages/About";


export default function Blockcomponent() {
    return (
        
                <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} /> 
                </Routes>
                </BrowserRouter>
         
    );
}



// class Blockcomponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Route path="/" component={Home} />
//                 <Route path="about" component={About} />          
//             </div>
//      );
//     }
// }

// export default Blockcomponent;
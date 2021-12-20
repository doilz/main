import {Outlet, Link} from 'react-router-dom';
import '../Radiocss.css';
import { useState } from 'react';


const Layout = () => {
    
    


    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>  
                    </li>
                    <li>
                        <Link to="/blogs">blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link> 
                    </li>
                </ul>
            </nav>
           
            <Outlet />
        </>
    )
};

// 링크 투 라우팅할 주소.

export default Layout;
import { Outlet, Link } from "react-router-dom";
import './Radiocss.css';

const Layout = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Calc">Calc</Link>
                    </li>
                    <li>
                        <Link to="/Goalclass">Goal</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
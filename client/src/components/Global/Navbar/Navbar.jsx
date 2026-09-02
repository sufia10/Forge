import { Link, useLocation } from "react-router-dom";
import { CodeXml } from "lucide-react";
import "./navbar.css";

function Navbar() {

    const location = useLocation();

    const isHome = location.pathname === "/";

    return (
        <nav className={`navbar ${isHome ? "home-navbar" : "main-navbar"}`}>

            <div className="navbar-main">
                <div className="icon">
                    <CodeXml />
                </div>

                <h2>Forge</h2>
            </div>

            <div className="navbar-links">
                <Link to="/">Explore</Link>
                <Link to="/projectDetails">Projects</Link>
                <Link to="/profile">Developers</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>

            <div className="navbar-auth">
                <Link to="/login">
                    Sign In
                </Link>

                <button>Submit project</button>
            </div>

        </nav>
    );
}

export default Navbar;
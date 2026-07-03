import {Link} from 'react-router-dom'


function Navbar(){
    return(
        <nav>

            <Link to="/">
            <h2>Forge</h2>
            </Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
    
}

export default Navbar;
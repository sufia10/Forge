import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard'; 
import Login from"../pages/Login";
import Register from"../pages/Register";
import NotFound from"../pages/NotFound";
import Profile from"../pages/Profile";
import ProjectDetails from"../pages/ProjectDetails";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
    );
}

export default AppRoutes;
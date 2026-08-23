import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile/Profile';
import ProjectDetails from '../pages/ProjectDetail/ProjectDetails';

import MainLayout from '../MainLayout/MainLayout';

function AppRoutes() {
    return (
        <Routes>

            {/* Home has its own Navbar */}
            <Route path="/" element={<Home />} />

            {/* All other pages share the black Navbar */}
            <Route element={<MainLayout />}>

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/projectDetails" element={<ProjectDetails />} />

            </Route>

            {/* Pages without the MainLayout */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/not-found" element={<NotFound />} />

        </Routes>
    );
}

export default AppRoutes;
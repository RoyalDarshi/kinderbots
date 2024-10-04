import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/AuthContext';
import Students from "./components/pages/Students";
import School from "./components/pages/School";
import SchoolDetails from "./components/pages/SchoolDetails";
import FeeStructure from "./components/pages/FeeStructure";
import Attendance from "./components/pages/Attendance";
import { generateToken, messaging } from "./notifications/firebase";
import { onMessage } from "firebase/messaging";
import toast, { Toaster } from "react-hot-toast";
import Birthday from "./components/pages/Birthday";
import ReportCard from "./components/pages/ReportCard";
import TimeTable from "./components/pages/TimeTable";
import Assignment from "./components/pages/Assignment";
import OnlineRegistration from "./components/pages/OnlineRegistration";
import OnlineFeesPayment from "./components/pages/OnlineFeesPayment";

const App = () => {
    const authContext = useAuth();
    const { isAuthenticated, role, loading } = authContext || {};

    useEffect(() => {
        generateToken();
        onMessage(messaging, (payload) => {
            console.log(payload);
            toast(payload.notification.body);
        });
    }, []);

    if (loading) return <div>Loading...</div>;

    const dummyStats = {
        numStudents: 1200,
        numSchools: 15,
        numTeachers: 85,
        numDistrictAgents: 5,
    };

    return (
        <Router>
            {isAuthenticated && <Navbar />}
            <Toaster />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<PrivateRoute><Home stats={dummyStats} /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                {role === 'admin' && (
                    <>
                        <Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
                        <Route path="/school" element={<PrivateRoute><School /></PrivateRoute>} />
                        <Route path="/registration" element={<PrivateRoute><OnlineRegistration /></PrivateRoute>} />
                        <Route path="/school-details" element={<PrivateRoute><SchoolDetails /></PrivateRoute>} />
                        <Route path="/fee-structure" element={<PrivateRoute><FeeStructure /></PrivateRoute>} />
                        <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
                    </>
                )}
                {role === 'partner' && (
                    <>
                        <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
                        <Route path="/birthday" element={<PrivateRoute><Birthday /></PrivateRoute>} />
                        <Route path="/report" element={<PrivateRoute><ReportCard /></PrivateRoute>} />
                        <Route path="/assignment" element={<PrivateRoute><Assignment /></PrivateRoute>} />
                        <Route path="/online-payment" element={<PrivateRoute><OnlineFeesPayment /></PrivateRoute>} />
                        <Route path="/time-table" element={<PrivateRoute><TimeTable /></PrivateRoute>} />
                        <Route path="/school-details" element={<PrivateRoute><SchoolDetails /></PrivateRoute>} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;

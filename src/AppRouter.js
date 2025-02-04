import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Verification from './pages/Verification';
import './App.css'; 
import SplashScreen from './components/splashscreen';
import AdminSidebar from './components/adminsidebar';
import Register from './pages/Register';
import Dashboard from './pages/dashboard';

const AppRouter = () => {
  const location = useLocation();

  // Background image changer for routing
  const getBackgroundClass = () => {
    switch (location.pathname) {
      case '/login':
        return 'login-background';
      case '/verification':
        return 'verif-background';
      default:
        return;
    }
  };

  return (
    <div className={getBackgroundClass()}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/" element={ <SplashScreen/>} />
        <Route path="/register" element={ <Register/>} />
        <Route path="/adminsidebar" element={ <AdminSidebar/>} />
        <Route path="/dashboard" element={ <Dashboard/>} />
      </Routes>
    </div>
  );
};

export default AppRouter;

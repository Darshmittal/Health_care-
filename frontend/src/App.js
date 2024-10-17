// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PatientDetail from './components/PatientDetail';
import './styles/main.css'; 
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Router>
            <div className="App">
            <ToastContainer />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/patient/:id" element={<PatientDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

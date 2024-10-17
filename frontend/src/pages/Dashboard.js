// src/pages/Dashboard.js
import React from 'react';
import AuthorizationForm from '../components/AuthorizationForm';
import PatientList from '../components/PatientList';

const Dashboard = () => {
    return (
        <div>
            <h1>Patient Health Dashboard</h1>
            <AuthorizationForm />
            <PatientList />
        </div>
    );
};

export default Dashboard;

// api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const addPatient = async (patientData) => {
    try {
        const response = await axios.post(`${API_URL}/patients`, patientData); 
        return response.data; 
    } catch (error) {
        console.error('Error creating patient:', error);
        throw new Error('Error creating patient');
    }
};


export const getPatients = async () => {
    try {
        const response = await axios.get(`${API_URL}/patients`); 
        return response.data; 
    } catch (error) {
        console.error('Error fetching patients:', error);
        throw new Error('Error fetching patients');
    }
};

// Fetch a single patient by ID
export const getPatientById = async (patientId) => {
    try {
        const response = await axios.get(`${API_URL}/patients/${patientId}`); 
        return response.data; // Return the patient details
    } catch (error) {
        console.error('Error fetching patient:', error);
        throw new Error('Error fetching patient');
    }
};

// Submit a new prior authorization request
export const submitAuthorizationRequest = async (authData) => {
    try {
        const response = await axios.post(`${API_URL}/auth`, authData); 
        return response.data; 
    } catch (error) {
        console.error('Error submitting authorization request:', error);
        throw new Error('Error submitting authorization request');
    }
};

// Fetch all prior authorization requests
export const getAuthorizationRequests = async () => {
    try {
        const response = await axios.get(`${API_URL}/auth`); 
        return response.data; 
    } catch (error) {
        console.error('Error fetching authorization requests:', error);
        throw new Error('Error fetching authorization requests');
    }
};

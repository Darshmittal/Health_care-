// src/components/PatientList.js
import React, { useEffect, useState } from 'react';
import { getPatients } from '../services/api';
import { Link } from 'react-router-dom';

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const data = await getPatients();
                setPatients(data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };
        fetchPatients();
    }, []);

    return (
        <div>
            <h2>Patient List</h2>
            {patients.length === 0 ? (
                <p>No patients found.</p>
            ) : (
                <ul>
                    {patients.map((patient) => (
                        <li key={patient._id}>
                            <Link to={`/patient/${patient._id}`}>
                                {patient.name} - {patient.age} years old, {patient.gender}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PatientList;

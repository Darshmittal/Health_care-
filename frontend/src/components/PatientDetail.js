import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPatientById } from '../services/api'; 
import '../styles/main.css'; 
import patientImage from '../utils/images.png'; 

const PatientDetail = () => {
  const { id } = useParams(); 
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await getPatientById(id);
        setPatient(response);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit-patient/${id}`); 
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this patient profile?');
    if (confirmDelete) {
      
      alert('Patient profile deleted');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!patient) return <div>Patient not found.</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-center">Patient Profile</h2>
      <div className="card mb-3" style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
          {/* Display patient image */}
          <img src={patient.image || patientImage} alt="Patient" style={{ width: '150px', height: '150px', borderRadius: '75px', marginBottom: '20px' }} />
          <h5 className="card-title">{patient.name}</h5>
          <p className="card-text"><strong>Age:</strong> {patient.age}</p>
          <p className="card-text"><strong>Gender:</strong> {patient.gender}</p>
          <p className="card-text"><strong>Diagnosis:</strong> {patient.diagnosis}</p>
          <p className="card-text"><strong>Condition:</strong> {patient.condition}</p>
          <p className="card-text"><strong>Medical History:</strong> {patient.medicalHistory || 'N/A'}</p>
          <p className="card-text"><strong>Treatment Plan:</strong> {patient.treatmentPlan}</p>
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-primary" onClick={handleEdit}>Edit Profile</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;

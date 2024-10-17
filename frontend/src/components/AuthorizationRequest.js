// src/components/AuthorizationRequest.js

import React, { useState } from 'react';
import axios from 'axios';

const AuthorizationRequest = () => {
  const [patientId, setPatientId] = useState('');
  const [treatmentType, setTreatmentType] = useState('');
  const [insurancePlan, setInsurancePlan] = useState('');
  const [dateOfService, setDateOfService] = useState('');
  const [diagnosisCode, setDiagnosisCode] = useState('');
  const [doctorNotes, setDoctorNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/authorization-requests', {
        patientId,
        treatmentType,
        insurancePlan,
        dateOfService,
        diagnosisCode,
        doctorNotes,
      });
      console.log('Authorization request submitted:', response.data);
      // Clear the form
      setPatientId('');
      setTreatmentType('');
      setInsurancePlan('');
      setDateOfService('');
      setDiagnosisCode('');
      setDoctorNotes('');
    } catch (error) {
      console.error('Error submitting authorization request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Authorization Request</h2>
      <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} placeholder="Patient ID" required />
      <input type="text" value={treatmentType} onChange={(e) => setTreatmentType(e.target.value)} placeholder="Treatment Type" required />
      <input type="text" value={insurancePlan} onChange={(e) => setInsurancePlan(e.target.value)} placeholder="Insurance Plan" required />
      <input type="date" value={dateOfService} onChange={(e) => setDateOfService(e.target.value)} required />
      <input type="text" value={diagnosisCode} onChange={(e) => setDiagnosisCode(e.target.value)} placeholder="Diagnosis Code" required />
      <textarea value={doctorNotes} onChange={(e) => setDoctorNotes(e.target.value)} placeholder="Doctor Notes" />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default AuthorizationRequest;

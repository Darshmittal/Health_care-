// src/components/AddPatient.js

import React, { useState } from 'react';
import axios from 'axios';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [condition, setCondition] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [treatmentPlan, setTreatmentPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/patients', {
        name,
        age,
        condition,
        medicalHistory: medicalHistory.split(','),
        treatmentPlan,
      });
      console.log('Patient added:', response.data);
      // Clear the form
      setName('');
      setAge('');
      setCondition('');
      setMedicalHistory('');
      setTreatmentPlan('');
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Patient</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} placeholder="Condition" required />
      <input type="text" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} placeholder="Medical History (comma separated)" />
      <input type="text" value={treatmentPlan} onChange={(e) => setTreatmentPlan(e.target.value)} placeholder="Treatment Plan" />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatient;

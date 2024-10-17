const Patient = require('../models/Patient');


const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


const addPatient = async (req, res) => {
    const { 
      name, 
      age, 
      gender,        
      diagnosis,     
      condition, 
      medicalHistory, 
      treatmentPlan 
    } = req.body;
  
    if (!name || !age || !gender || !diagnosis || !condition || !treatmentPlan) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }
  
    try {
      const newPatient = new Patient({ 
        name, 
        age, 
        gender,         
        diagnosis,      
        condition, 
        medicalHistory, 
        treatmentPlan 
      });
      
      const savedPatient = await newPatient.save();
      res.status(201).json(savedPatient);
    } catch (error) {
      res.status(400).json({ message: 'Error creating patient', error });
    }
  };
  
  module.exports = {
    getPatients,
    getPatientById,
    addPatient,
  };
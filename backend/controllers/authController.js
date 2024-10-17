const AuthorizationRequest = require('../models/AuthorizationRequest');


const submitAuthorizationRequest = async (req, res) => {
  const { patientId, treatmentType, insurancePlan, dateOfService, diagnosisCode, doctorNotes } = req.body;
  
  try {
    const newRequest = new AuthorizationRequest({
      patientId,
      treatmentType,
      insurancePlan,
      dateOfService,
      diagnosisCode,
      doctorNotes,
    });
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(400).json({ message: 'Error submitting authorization request', error });
  }
};


const getAuthorizationRequests = async (req, res) => {
  try {
    const requests = await AuthorizationRequest.find().populate('patientId');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  submitAuthorizationRequest,
  getAuthorizationRequests,
};

const express = require('express');
const router = express.Router();
const { getPatients, getPatientById, addPatient } = require('../controllers/patientController');

router.get('/', getPatients);
router.get('/:id', getPatientById);
router.post('/', addPatient);

module.exports = router;

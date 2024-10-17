const express = require('express');
const router = express.Router();
const { submitAuthorizationRequest, getAuthorizationRequests } = require('../controllers/authController');

router.get('/', getAuthorizationRequests);
router.post('/', submitAuthorizationRequest);

module.exports = router;

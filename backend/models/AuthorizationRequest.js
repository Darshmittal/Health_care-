const mongoose = require('mongoose');

const authorizationRequestSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    authorizationType: {
        type: String,
        required: true
    },
    requestDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Pending'
    }
}, {
    timestamps: true
});

const AuthorizationRequest = mongoose.model('AuthorizationRequest', authorizationRequestSchema);

module.exports = AuthorizationRequest;

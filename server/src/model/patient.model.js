const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },

    address: {
        type: String
    },

    medicalHistory: {
        type: String
    },

    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Patient", patientSchema);
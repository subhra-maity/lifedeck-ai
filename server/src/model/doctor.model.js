const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
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

    specialization: {
        type: String,
        required: true
    },

    qualification: {
        type: String
    },

    experience: {
        type: Number
    },

    consultationFee: {
        type: Number,
        required: true
    },

    availableDays: [{
        type: String
    }],

    availableTime: {
        type: String
    },

    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Doctor", doctorSchema);
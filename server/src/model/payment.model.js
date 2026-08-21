const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },

    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: ["UPI", "Card", "Net Banking", "Cash"],
        required: true
    },

    transactionId: {
        type: String,
        unique: true
    },

    paymentStatus: {
        type: String,
        enum: ["Pending", "Successful", "Failed", "Refunded"],
        default: "Pending"
    },

    paymentDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Payment", paymentSchema);
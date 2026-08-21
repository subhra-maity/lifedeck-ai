const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 0,
      max: 110,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    medicalHistory: {
      type: String,
      default: "",
      trim: true,
    },

    allergies: {
      type: [String],
      default: [],
    },

    emergencyContact: {
      name: {
        type: String,
        trim: true,
        default: "",
      },

      phone: {
        type: String,
        trim: true,
        default: "",
      },

      relationship: {
        type: String,
        trim: true,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
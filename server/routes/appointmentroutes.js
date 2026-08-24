const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");

// Get appointments
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Book appointment
router.post("/", async (req, res) => {
    try {
        const appointment =
            await Appointment.create(req.body);

        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Cancel appointment
router.delete("/:id", async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);

        res.json({
            message: "Appointment cancelled"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
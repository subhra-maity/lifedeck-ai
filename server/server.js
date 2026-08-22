import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

let app= express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.json({
        message: "Health Appointment Assistant API is running"
    });
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

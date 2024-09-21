const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: ["http://localhost:3000"], // Whitelist domains
  credentials: true, // Allow cookies and credentials
};

app.use(cors(corsOptions)); // Apply CORS middleware

app.use("/api/employees", employeeRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));

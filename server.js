const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/EmployeeRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

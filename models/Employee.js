const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    jobTitle: { type: String, required: true },
    department: { type: String, required: true },
    hireDate: { type: Date, required: true },
    contactInfo: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);

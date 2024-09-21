const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  jobTitle: { type: String, required: true },
  department: { type: String, required: true },
  hireDate: { type: Date, default: Date.now },
  contactInfo: { type: String },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;

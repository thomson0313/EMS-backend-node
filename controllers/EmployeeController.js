const Employee = require("../models/employeeModel");

// Create new employee
const createEmployee = async (req, res) => {
  const employee = await Employee.create(req.body);
  res.status(201).json(employee);
};

// Get all employees
const getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

// Get single employee
const getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};

// Update employee
const updateEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (employee) {
    Object.assign(employee, req.body);
    await employee.save();
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      await Employee.findByIdAndDelete(req.params.id); // Use findByIdAndDelete
      res.json({ message: "Employee removed" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};

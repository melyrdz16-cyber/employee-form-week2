import EmployeeList from "./EmployeeList";
import "./EmployeeForm.css";
import React, { useState, useEffect } from "react";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: ""
  });

  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  setEmployees([...employees, employee]);

  alert("Employee Added!");

  setEmployee({
    firstName: "",
    lastName: "",
    email: "",
    position: ""
  });
};

const handleDelete = (indexToDelete) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (confirmDelete) {
    const updatedEmployees = employees.filter(
      (employee, index) => index !== indexToDelete
    );

    setEmployees(updatedEmployees);
  }
};

    

  return (
    <div className="employee-form">
      <h2>New Employee Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={employee.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={employee.position}
          onChange={handleChange}
        />

        <button type="submit">Add Employee</button>
      </form>
<EmployeeList
  employees={employees}
  onDelete={handleDelete}
/>
    </div>
  );
}

export default EmployeeForm;
      
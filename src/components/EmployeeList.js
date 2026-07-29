function EmployeeList({ employees }) {
  return (
    <div>
      <h3>Employees</h3>

      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.firstName} {emp.lastName} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
function EmployeeList({ employees, onDelete }) {
  return (
    <div className="employee-list">
      <h3>Employees</h3>

      {employees.length === 0 ? (
        <p>No employees have been added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>
                  {employee.firstName} {employee.lastName}
                </td>
                <td>{employee.email}</td>
                <td>{employee.position}</td>
                <td>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;
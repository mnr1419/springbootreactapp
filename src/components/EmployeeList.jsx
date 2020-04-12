import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getEmployees,
  deleteEmployee,
  editEmployee,
} from "../actions/employeeactions";
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.editEmployeeMethod = this.editEmployeeMethod.bind(this);
  }
  deleteEmployee(id) {
    this.props.deleteEmployee(id, this.props.history);
  }
  editEmployeeMethod(empId) {
    //console.log(empId);
    this.props.editEmployee(empId, this.props.history);
    // this.props.history.push("/editemployee");
  }
  componentDidMount() {
    this.props.getEmployees();
  }
  render() {
    return (
      <div>
        <h3>Employee Detials</h3>
        <br />
        <br />
        <table border="2">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.salary}</td>
                <td>{emp.empAddress}</td>
                <td>
                  <button onClick={() => this.editEmployeeMethod(emp.empId)}>
                    Edit
                  </button>

                  <button onClick={() => this.deleteEmployee(emp.empId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
EmployeeList.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  editEmployee: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  employees: state.employees,
});
export default connect(mapStateToProps, {
  getEmployees,
  deleteEmployee,
  editEmployee,
})(EmployeeList);

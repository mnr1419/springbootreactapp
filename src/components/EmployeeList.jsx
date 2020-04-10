import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmployees } from "../actions/employeeactions";
class EmployeeList extends Component {
  // constructor(props) {
  //   super(props);
  //   //this.deleteProduct = this.deleteProduct.bind(this);
  //   //this.editProduct = this.editProduct.bind(this);
  // }
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
                <td>Edit|Delete</td>
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
};
const mapStateToProps = (state) => ({
  employees: state.employees,
});
export default connect(mapStateToProps, { getEmployees })(EmployeeList);

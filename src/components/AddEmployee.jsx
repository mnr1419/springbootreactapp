import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmployee } from "../actions/employeeactions";
import PropTypes from "prop-types";
class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "",
      salary: "",
      empAddress: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const employee = {
      empName: this.state.empName,
      salary: this.state.salary,
      empAddress: this.state.empAddress,
    };
    this.props.addEmployee(employee, this.props.history);
  }
  render() {
    return (
      <div>
        <h3>Add Employee</h3>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <label> Enter Name:</label>
          <input
            type="text"
            name="empName"
            placeholder="Employee Name"
            value={this.state.empName}
            onChange={this.changeInput}
          />
          <br />
          <br />
          <label> Enter Salary:</label>
          <input
            type="Number"
            name="salary"
            placeholder="Employee Salary"
            value={this.state.salary}
            onChange={this.changeInput}
          />
          <br />
          <br />
          <label> Enter Address:</label>
          <input
            type="textarea"
            name="empAddress"
            placeholder="Employee Address"
            value={this.state.empAddress}
            onChange={this.changeInput}
          />
          <br />
          <br />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
AddEmployee.propTypes = {
  addEmployee: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, { addEmployee })(AddEmployee);

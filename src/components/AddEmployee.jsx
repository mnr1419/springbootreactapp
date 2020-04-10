import React, { Component } from "react";
import { connect } from "react-redux";
class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "",
      salary: "",
      empAddress: "",
    };
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
        </form>
      </div>
    );
  }
}
export default AddEmployee;

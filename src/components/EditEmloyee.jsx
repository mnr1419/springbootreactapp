import React, { Component } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { updateEmployee } from "../actions/employeeactions";
import PropTypes from "prop-types";

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   empName: "",
    //   salary: "",
    //   empAddress: "",
    //   employee: {},
    // };
    //this.changeInput = this.changeInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // instead of mention each method to bind we can bind all the functions at a time with in single line
    autoBind(this);
  }
  changeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    //console.log("handleMethod employee id", this.props.employee.empId);
    const employee = {
      empId: this.props.employee.empId,
      empName: e.target.empName.value,
      salary: e.target.salary.value,
      empAddress: e.target.empAddress.value,
    };
    this.props.updateEmployee(employee, this.props.history);
  }
  render() {
    return (
      <div>
        Edit Employee
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>Employee Name:</label>
          <input
            type="text"
            name="empName"
            defaultValue={this.props.employee.empName}
            onChange={this.changeInput}
          />
          <br />
          <br />
          <label>Employee salary:</label>
          <input
            type="Number"
            name="salary"
            defaultValue={this.props.employee.salary}
            onChange={this.changeInput}
          />
          <br />
          <br />
          <label>Employee Address:</label>
          <input
            type="textarea"
            name="empAddress"
            defaultValue={this.props.employee.empAddress}
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
EditEmployee.propTypes = {
  updateEmployee: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  return {
    employee: state.employees[0],
  };
}
export default connect(mapStateToProps, { updateEmployee })(EditEmployee);

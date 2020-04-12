import {
  GET_ALL_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
} from "../actions/actiontypes";
const initialState = {
  employees: [],
  employee: {},
};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        employees: action.employees,
      };
    case ADD_EMPLOYEE:
      return {
        employees: state.employees.concat([action.employee]),
      };
    case DELETE_EMPLOYEE:
      return {
        employees: state.employees.filter((emp) => emp.empId !== action.id),
      };
    case EDIT_EMPLOYEE:
      return {
        employees: state.employees.filter((emp) => emp.empId === action.id),
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.empId !== action.employee.empId) {
            return employee;
          } else {
            return {
              ...employee,
              empName: action.employee.empName,
              salary: action.employee.salary,
              empAddress: action.employee.empAddress,
            };
          }
        }),
      };
    default:
      return state;
  }
};

export default EmployeeReducer;

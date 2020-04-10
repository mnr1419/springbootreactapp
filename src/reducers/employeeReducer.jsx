import {
  GET_ALL_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
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
    default:
      return state;
  }
};

export default EmployeeReducer;

import {
  GET_ALL_EMPLOYEES,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
} from "./actiontypes";
import ApiService from "../service/ApiService";

export const getEmployees = () => async (dispatch) => {
  const res = await ApiService.getAllEmployees();
  dispatch({
    type: GET_ALL_EMPLOYEES,
    employees: res.data,
  });
};

export const addEmployee = (employee, history) => async (dispatch) => {
  const response = await ApiService.addEmployee(employee);
  dispatch({
    type: ADD_EMPLOYEE,
    employee: response.data,
  });
  history.push("/");
};
export const deleteEmployee = (id, history) => async (dispatch) => {
  await ApiService.deleteEmployee(id);
  dispatch({
    type: DELETE_EMPLOYEE,
    id: id,
  });
  history.push("/");
};
export const editEmployee = (id, history) => async (dispatch) => {
  //const response = await ApiService.deleteEmployee(id);
  dispatch({
    type: EDIT_EMPLOYEE,
    id: id,
  });
  history.push("/editemployee");
};
export const updateEmployee = (employee, history) => async (dispatch) => {
  await ApiService.updateEmployee(employee);
  dispatch({
    type: UPDATE_EMPLOYEE,
    employee: employee,
  });
  history.push("/");
};

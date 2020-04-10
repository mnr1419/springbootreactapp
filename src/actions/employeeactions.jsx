import axios from "axios";
import {
  GET_ALL_EMPLOYEES,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE,
} from "./actiontypes";
import ApiService from "../service/ApiService";

export const getEmployees = () => async (dispatch) => {
  const res = await ApiService.getAllEmployees();
  dispatch({
    type: GET_ALL_EMPLOYEES,
    employees: res.data,
  });
};

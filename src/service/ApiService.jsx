import axios from "axios";
const USER_API_BASE_URL = "http://localhost:2222/spring-boot-app/employee";
const FORWARD_SLASH = "/";

class ApiService {
  getAllEmployees() {
    return axios.get(USER_API_BASE_URL);
  }
  addEmployee(employee) {
    return axios.post(USER_API_BASE_URL, employee);
  }
  deleteEmployee(id) {
    return axios.delete(USER_API_BASE_URL + FORWARD_SLASH + id);
  }
  updateEmployee(employee) {
    return axios.put(USER_API_BASE_URL, employee);
  }
}
export default new ApiService();

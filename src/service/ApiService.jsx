import axios from "axios";
const USER_API_BASE_URL = "http://localhost:2222/spring-boot-app/employee";

class ApiService {
  getAllEmployees() {
    return axios.get(USER_API_BASE_URL);
  }
}
export default new ApiService();

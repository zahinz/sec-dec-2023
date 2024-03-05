import axios from "axios";

// THIS IN NOT USING AXIOS INSTANCE
// const API_URL = "https://bitly-clone-2.onrender.com/api";

// export function registerUser(data) {
//   return axios.post(`${API_URL}/register`, data);
// }

// export function loginUser(data) {
//   return axios.post(`${API_URL}/login`, data);
// }

// THIS IS USING AXIOS INSTANCE
const API = axios.create({
  baseURL: "https://bitly-clone-2.onrender.com/api",
});

export function registerUser(data) {
  return API.post("/register", data);
}

export function loginUser(data) {
  return API.post("/login", data);
}

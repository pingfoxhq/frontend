import { config } from "../config";
import axios from "axios";

const api = axios.create({
  baseURL: config.apiBaseUrl || "http://localhost:8000",
  withCredentials: true,
});


export default api;

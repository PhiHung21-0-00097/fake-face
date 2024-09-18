import axios from "axios";
import { toast } from "react-toastify";

import config from "../config";

const axiosIntanceAuth = axios.create({
  baseURL: `${config.API_URL}/`,
});

const axiosIntanceNonAuth = axios.create({
  baseURL: `${config.API_URL}/`,
});

const axiosTest = axios.create({
  baseURL: "http://localhost:3333",
});

export { axiosIntanceAuth, axiosIntanceNonAuth, axiosTest };

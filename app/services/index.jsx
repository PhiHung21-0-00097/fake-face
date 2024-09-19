import axios from "axios";
import { toast } from "react-toastify";

import config from "../config";

const axiosIntanceAuth = axios.create({
  baseURL: `${config.API_URL}/api/v1`,
});

const axiosIntanceNonAuth = axios.create({
  baseURL: `${config.API_URL}/api/v1`,
});

const axiosTest = axios.create({
  baseURL: "https://test-deploy-nestjs-5z1q.vercel.app",
});

export { axiosIntanceAuth, axiosIntanceNonAuth, axiosTest };

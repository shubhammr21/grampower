// djsr/frontend/src/axiosApi.js

import axios from "axios"

const baseURL = "http://127.0.0.1:8000/" /* "http://192.168.43.91:8000/" */

const Axios = axios.create({
  baseURL: baseURL,
  timeout: 5000,

  headers: {
    "Content-Type": "application/json",
    accept: "application/json"
  }
})

export default Axios

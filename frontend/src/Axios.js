// djsr/frontend/src/axiosApi.js

import axios from "axios"

const baseURL = "https://grammpower.herokuapp.com/" /* "http://192.168.43.91:8000/" */

const Axios = axios.create({
  baseURL: baseURL,
  timeout: 5000,

  headers: {
    "Content-Type": "application/json",
    accept: "application/json"
  }
})

export default Axios

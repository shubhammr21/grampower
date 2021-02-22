// djsr/frontend/src/axiosApi.js

import Axios from "axios"

const baseURL = "127.0.0.1:8000" /* "http://192.168.43.91:8000/" */

Axios.defaults.baseURL = baseURL

export default Axios

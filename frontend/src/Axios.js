// djsr/frontend/src/axiosApi.js

import Axios from "axios"

const baseURL = "https://grammpower.herokuapp.com" /* "http://192.168.43.91:8000/" */

Axios.defaults.baseURL = baseURL

export default Axios

// djsr/frontend/src/axiosApi.js

import Axios from "axios"
// const host = window.location.protocol + "//" + window.location.host
// console.log(host)
// if (window.location.hostname === "127.0.0.1" || "localhost") {
//   const baseURL = "http://127.0.0.1:8000"
//   console.log("In localhost")
//   Axios.defaults.baseURL = baseURL
// } else {
// }
const baseURL = "http://127.0.0.1:8000"
console.log("In server")
Axios.defaults.baseURL = baseURL

export default Axios

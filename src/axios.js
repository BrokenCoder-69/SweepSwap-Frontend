// src/axios.js
import axios from 'axios';
const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
});
// const instance = axios.create({
//   baseURL: "http://127.0.0.1:8000", // Laravel API base
//   withCredentials: true,           // Needed for Sanctum cookies
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export default instance;

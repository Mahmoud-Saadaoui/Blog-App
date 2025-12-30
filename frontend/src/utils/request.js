import axios from "axios";

const request = axios.create({
    // baseURL: "http://localhost:8000"
    baseURL: "https://blog-app-api-msx8.onrender.com"
});

export default request;
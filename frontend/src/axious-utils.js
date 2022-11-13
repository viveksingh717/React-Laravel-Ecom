import axios from "axios";

// const authToken = localStorage.getItem('auth_token');

const axiosinstance = axios.create({
    baseURL : axios.defaults.baseURL = 'http://localhost:8000/api/auth/',
});

// axiosinstance.defaults.headers.common['Authorization'] = authToken ? `bearer ${authToken}` : '';

export default axiosinstance;
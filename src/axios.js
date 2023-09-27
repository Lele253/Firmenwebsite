import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8081/auth'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')

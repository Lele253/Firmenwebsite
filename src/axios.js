import axios from "axios";

axios.defaults.baseURL = 'http://franke-arts.de:8085/auth'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')

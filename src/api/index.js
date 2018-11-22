import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(function (res) {
    //console.info(res.data);
    return res.data;
});
export  default  axios;
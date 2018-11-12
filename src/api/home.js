import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.response.use(function (res) {
    //console.info(res.data);
    return res.data;
});
/**
 * 获得轮播图的接口
 * @return {AxiosPromise<any>}
 */
export let getSliders = () => {
    return axios.get('/sliders');
};
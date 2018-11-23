import axios from './index';

/**
 *
 * @param userInfo
 * @return {AxiosPromise<any>}
 */
export let login = (userInfo) => {
    return axios.post('/login',userInfo);
};
/**
 *
 * @param userInfo
 * @return {AxiosPromise<any>}
 */
export let reg = (userInfo) => {
    return axios.post('/reg',userInfo);
};

/**
 *
 * @return {AxiosPromise<any>}
 */
export let validate = () => {
    return axios.get('/validate');
};
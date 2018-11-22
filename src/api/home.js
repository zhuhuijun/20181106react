import axios from './index';

/**
 * 获得轮播图的接口
 * @return {AxiosPromise<any>}
 */
export let getSliders = () => {
    return axios.get('/sliders');
};

export let getLessons = (limit, offset, type) => {
    return axios.get(`/lessons?limit=${limit}&offset=${offset}&type=${type}`);
};
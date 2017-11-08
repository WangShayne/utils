/**
 * - axios 封装get/post
 */
import axios from 'axios'
import Config from './config'

class API {
    get(data) {
        return axios.get(data.url, data.data)
    };
    post(data) {
        let config = new Config();
        console.log(config)
        config.url = data.url;
        config.data = data.data;
        return axios(config)
    };
    all(data) {
        return axios.all(data)
    }
}

export default API;

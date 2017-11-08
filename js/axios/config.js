/**
 *  - axios 配置文件
 */
import Qs from 'qs'

function config() {
    this.url = '';

    this.baseURL = 'http:\/\/localhost:8080';

    this.method = 'POST';

    this.transformRequest = [function (data) {
        //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
        data.CustData = JSON.stringify(data.CustData);
        //由于使用的form-data传数据所以要格式化
        data = Qs.stringify(data);
        return data;
    }];

    this.transformResponse = [function (data) {
        return data;
    }];

    this.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    this.params = {}

    this.paramsSerializer = function (params) {
        return Qs.stringify(params)
    };

    this.data = {}

    this.timeout = 10000

    this.withCredentials = false // default

    this.responseType = 'json' // default

    this.onUploadProgress = function (progressEvent) {
        // Do whatever you want with the native progress event
    }

    this.onDownloadProgress = function (progressEvent) {
        // Do whatever you want with the native progress event
    }

    this.maxContentLength = 2000

    this.validateStatus = function (status) {
        return status >= 200 && status < 300; // default
    }

    this.maxRedirects = 5 // default

}

export default config

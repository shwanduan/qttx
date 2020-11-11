import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // baseURL: "https://www.wuhuxingchengkeji.com/api/",
    timeout: 10000
});

service.interceptors.request.use(
    config => {
        let token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = JSON.parse(token).token;
        }
        return config
    },
    error => {
        window.console.log(error);
        return Promise.reject(error,)
    }
);

service.interceptors.response.use(
    response => {
        const res = response.data;
        window.console.log(res);
        if (res.code !== '1') {
            Message({
                message: res.msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            });
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res.data
        }
    },
    error => {
        let errMsg = "请求错误，请重新登录";
        if (error.response) {
            errMsg = error.response.data.msg || errMsg;
        }
        Message({
            message: errMsg,
            type: 'error',
            duration: 3 * 1000
        });
        // router.push('/login');
        return Promise.reject(error)
    }
);

export default service

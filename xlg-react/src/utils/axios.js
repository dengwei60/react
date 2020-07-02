import axios from "axios"
//配置好自己的axios
//创建一个axios的实例

const instance = axios.create({
    // 配置开发环境和生产环境
    baseURL: process.env.REACT_APP_URL
   
})
//配置请求拦截
instance.interceptors.request.use(config => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {}
    let oauth_token = userInfo.oauth_token 
    if(oauth_token && config.data){
        config.data.oauth_token = oauth_token
    }
// Do something before request is sent
return config;
},error => {
// Do something with request error
return Promise.reject(error);
});
//配置访问到拦截
instance.interceptors.response.use(response => {
// Do something before response is sent
return response.data;
},error => {
// Do something with response error
return Promise.reject(error);
});
 export default instance;
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

// 请求默认值
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

//创建实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
});

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  console.log(error);
  Promise.reject(error);
})

// 添加响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
      // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (code === 401) {
      MessageBox.confirm('登录状态过期，你可以继续留在该页面，或者重新登录', '系统提醒', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          Location.href = '/login';
        })
    } else if (code === 500) {
      Message({
        message: msg,
        type: 'error'
      })
      return Promise.reject(new Error(msg))
    } else if (code === 200) {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "网络正在思考人生，请稍后再试；";
    } else if (message.includes("timeout")) {
      message = "网络正在思考人生，请稍后再试；";
    } else if (message.includes("Request failed with status code")) {
      message = "服务器已离家出走，请稍后再试；详细信息：系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  });

// 导出
export default service
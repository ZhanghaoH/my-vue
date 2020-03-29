<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from 'axios';

// 拦截器

export default {
  created () {
    
    console.log('axios: ', axios);
    let cancelToken = axios.cancelToken;
    let source = cancelToken.source();

    axios.get('data.json', { 
      cancelToken: source.token
    }).then(res => {
      console.log('res: ', res);
    }).catch(err => {
      console.log('err: ', err);
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message);
      } else {
        // 处理错误
      }
    })

    // 取消请求 参数可选 类似$.ajax.abort()
    source.cancel(msg || '请求被取消');

    /**
     * *请求拦截器
     * axios.interceptors.requset
     * @param req  请求配置/返回结果 
     * @param err 错误参数
     */
    const reqInterceptor = axios.interceptors.request.use(config => {
      // 请求前做些什么
      return config;
    }, err => {
      // 请求错误做些什么
      return Promise.reject(err);
    });

    /**
     * *响应拦截器
     * axios.interceptors.response
     * @param res 返回结果 
     * @param err 错误参数
     */
    const resInterceptor = axios.interceptors.response.use(res => {
      // 请求成功后对响应数据做些什么
      return res;
    }, err => {
      // 响应错误做些什么
      return Promis.reject(err);
    });

    // 取消拦截器
    // eject 取消拦截器
    // @param 拦截器实例
    axios.interceptors.request.eject(reqInterceptor);
    axios.interceptors.response.eject(resInterceptor);
  }
}
</script>

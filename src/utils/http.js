import axios from 'axios';
import loading from '@/plugins/loading'
import Vue from 'vue'
// import { Toast } from 'vant'

const vueInstance = new Vue;

export default async (opts) =>  {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(req => {
    vueInstance.$loading.show({});
    return req;  //要返回参数
  }, err => {
    console.log('err: ', err);
  });

  axiosInstance.interceptors.response.use(res => {
    vueInstance.$loading.hide();
  }, err => {
    vueInstance.$loading.hide();
    console.log('err: ', err);
  });


  return await axiosInstance(opts)
}

/**
 * *并发请求
 * axios.all(requestA, requestB).then(axios.spread((resA, resB) => {
 *    console.log(resA, resB)  //按顺序返回结果
 * })
 * * 全局配置
 */

 axios.defaults.timeout = 30000;
 axios.defaults.baseURL = 'http://localhost:3000';

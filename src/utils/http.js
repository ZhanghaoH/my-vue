import axios from 'axios'

export default async (opts) =>  {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(req => {
    // this.$loading.show();
  }, err => {
    console.log('err: ', err);
  });

  axiosInstance.interceptors.response.use(res => {
    console.log('res: ', res);
    // this.$loading.hide();
  }, err => {
    console.log('err: ', err);
  });


  return await axiosInstance(opts).then(data => {
    return data;
  }).catch(e => {
    return e || { err_desc: '请求出错' }
  })
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

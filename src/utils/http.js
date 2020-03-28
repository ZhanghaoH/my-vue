import axios from 'axios'

export default async (opts) =>  {
  return await axios(opts).then(data => {
    return data;
  }).catch(e => {
    return e || { err_desc: '请求出错' }
  })
}
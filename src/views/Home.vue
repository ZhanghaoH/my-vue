<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="updateMsg">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
import http from '@/utils/http'

export default {
  name: 'Home',
  inject: {
    app: {
      type: Object,
    }
  },
  data() {
    return {
      // msg: this.app.title
      list: [
        { name: 'zhang', id: '001' },
        { name: 'zhang2', id: '002' },
        { name: 'zhang3', id: '003' }
      ]
    }
  },
  computed: {
    msg () {
      const { app } = this;
      return 'msg：' + app.title;
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    async updateMsg(params) {
      // 通过调用app的更新title方法更新依赖title的msg
      const data = await this.app.getTitle();
      // console.log('data: ', data);
    }
  },
  async created() {
    try {
      const data = await http({ method: 'get', url: 'data.json'})
      // console.log('data: ', data);
      
    } catch (error) {
      // console.log('error: ', error);
      
    }

    // 创建实例  以应对不同请求的个性化需求如超时时间不同 地址不同等
    let instance = axios.create({
      // 实例配置 在具体请求时可参数覆盖
      baseURL: 'http://localhost:3000',  //请求域名
      timeout: 15000,  //超时时间 ms
      url: '/data.json',  //请求路径  完整url = baseURL + url
      method: 'get',  //请求方法  get post delete patch
      params: {},  //参数拼接在url 常见get
      data: {},  //参数在请求体body 常见post等
      headers: {
        // 请求头
      },
    });

    instance.get('/data.json', { timeout: 15000 }).then(res => {
      // console.log(res);
    })
  },
  mounted() {
    for(let id of this.list) {
      id.id = `id-${id.id}`
      id.fullStr = `${id.id}__${id.name}`
    }
    // console.log(JSON.stringify(this.list))
  },
}
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import http from '@/utils/http'
export default {
  name: 'app',
  provide () {
    return {
      app: this //将app实例暴露
    }
  },
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async getTitle() {
      const { data } = await http({
        method: 'get',
        url: '/data.json'
      });
      this.title = data.title;
    }
  },
  mounted() {
    // this.$loading.show({})
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

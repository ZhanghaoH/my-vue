<template>
  <div class="loading-cover" v-if="isVisible">
    <div class="loading-wrapper">
      <div class="loading-icon" v-if="icon">
        <img :src="icon" alt="加载中...">
      </div>
      <div class="loading-text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: require('../assets/loading.gif')
      },
      text: {
        type: String,
        default: '拼命加载中...'
      },
    },
    data() {
      return {
        isVisible: false,
      }
    },
    methods: {
      show () {
        this.isVisible = true;
      },
      hide () {
        this.isVisible = false;
      },
    }
  }
</script>

<style lang="less">
  .loading-cover {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // background-color: rgba(0, 0, 0, .4);
    .loading-wrapper {
      background-color: #fff;
      padding: 15px;
      box-shadow: 0 0 5px 5px #eee;
      border-radius: 6px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .loading-icon img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 auto;
      }
      .loading-text {
        font-size: 14px;
      }
    }
  }
</style>
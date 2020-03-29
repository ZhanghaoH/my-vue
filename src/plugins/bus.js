import Vue from 'vue';

/**
 * Vue.js 的插件应该暴露一个 install 方法
 * @param Vue 第一个参数是 Vue 构造器，
 * @param options 第二个参数是一个可选的选项对象
 */

//  空的vue实例作为中央时间总线
const vue = new Vue(); //没有参数可不需要括号

export default {
	install(Vue, options) {
		// 1. 添加全局方法或属性
		Vue.myGlobalMethod = function() {
			// 逻辑...
		};

		// 2. 添加全局资源
		Vue.directive('my-directive', {
			bind(el, binding, vnode, oldVnode) {
				// 逻辑...
			},
			// ...
		});

		// 3. 注入组件选项
		Vue.mixin({
			created: function() {
        this.__events = []; //events 队列
        
        const __self = this;
        this.$bus = {
          on (event, cb) {
            self.__events.push({ event, cb });
            vue.$on(event, cb);
          },
          once (event, cb) {
            self.__events.push({ event, cb });
            vue.$once(event, cb);
          },
          emit (...args) {
            vue.$emit.apply(vue, args);
          },
          off (event, cb) {
            vue.$off(event, cb);
          }
        }
      },
      destroyed() {
        this.__events.forEach(({event, cb}) => {
          vue.$off(event, cb);
        });
      },
			// ...
		});

		// 4. 添加实例方法
		Vue.prototype.$myMethod = function(methodOptions) {
			// 逻辑...
		};
	},
};

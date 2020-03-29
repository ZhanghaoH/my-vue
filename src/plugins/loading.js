import mLoading from '@/components/loading.vue';

const loading = {}

loading.install = Vue => {
	const LoadingConstructor = Vue.extend(mLoading);
	const instance = new LoadingConstructor();

	instance.$mount(document.createElement('div'));
	document.body.appendChild(instance.$el);

	const loading = {
		show(text, icon) {
			text && (instance.text = text);
			icon && (instance.icon = icon);
			instance.show();
		},
		hide() {
			instance.hide();
		},
	};
	//将方法挂载全局
  Vue.prototype.$loading = loading;
};

export default loading

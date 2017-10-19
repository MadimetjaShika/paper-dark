require('./bootstrap');

window.Vue = require('vue');

import Vue        from 'vue';

// lazy load components
const Home = (resolve) => require(['./components/App.vue'], resolve);

const app = new Vue({
	components : {
		Home,
	},
    el: '#app'
});

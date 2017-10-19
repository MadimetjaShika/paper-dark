require('./bootstrap');

window.Vue = require('vue');

import Vue        from 'vue';

// lazy load components
const Home = (resolve) => require(['./components/Home.vue'], resolve);

const app = new Vue({
	components : {
		Home,
	},
    el: '#app'
});

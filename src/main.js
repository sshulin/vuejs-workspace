import Vue from 'vue';
import sampleApp from './sampleApp.vue';

import './index.html';

document.querySelectorAll('sample-app').forEach(function(elem) {
	var dataObj = {};

	// var prop = elem.getAttribute('prop');

	// if(prop) {
	// 	elem.setAttribute(':prop', 'prop');
	// 	dataObj.prop = prop;

	// 	elem.removeAttribute('prop');
	// }

	new Vue({
		el: elem.parentNode,
		components: { sampleApp },
		data: function() {
			return dataObj
		}
	});
})



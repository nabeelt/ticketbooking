angular
	.module('header.module')
	.component('headerMain', {
	    templateUrl: '../app/js/header/header.template.html',
	    bindings: {},
	    controller: function($scope) {
	    	var ctrl = this;
	    	console.log(ctrl);
	    }
	});
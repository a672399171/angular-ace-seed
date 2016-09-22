angular.module('myApp')
	.factory(['progress', function () {
		return {
			start: function () {
				NProgress.start();
			},
			done: function () {
				NProgress.done();
			}
		}
	}]);

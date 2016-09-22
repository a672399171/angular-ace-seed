angular.module('myApp', ['ui.router', 'ui-notification'])
	.config(function (NotificationProvider) {
		// notification config
		NotificationProvider.setOptions({
			delay: 2000,
			startTop: 20,
			startRight: 10,
			verticalSpacing: 20,
			horizontalSpacing: 20,
			positionX: 'center',
			positionY: 'top'
		});
	})
	.config(function ($stateProvider, $urlRouterProvider) {
		// router config
		$stateProvider.state({
			name: 'dashboard',
			url: '/dashboard',
			templateUrl: './pages/dashboard.html'
		});

		$urlRouterProvider.otherwise('/dashboard');
	});



var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
	
	$routeProvider
	.when('/index', {
		templateUrl: 'views/inventory.html',
		controller: 'InventoryController',
		controllerAs: 'inventory'
	})
	.when('/model', {
		templateUrl: 'views/model.html',
		controller: 'ModelsController',
		controllerAs: 'models'
	})
	.when('/manufacturer', {
		templateUrl: 'views/manufacturer.html',
		controller: 'ManufacturersController',
		controllerAs: 'manufacturers'
	})
	.otherwise({
		redirectTo: '/index'
	});
});
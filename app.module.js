var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
	
	$routeProvider
	.when('/index', {
		templateUrl: 'inventory.html',
		controller: 'InventoryController',
		controllerAs: 'inventory'
	})
	.when('/model', {
		templateUrl: 'model.html',
		controller: 'ModelsController',
		controllerAs: 'models'
	})
	.when('/manufacturer', {
		templateUrl: 'manufacturer.html',
		controller: 'ManufacturersController',
		controllerAs: 'manufacturers'
	})
	.otherwise({
		redirectTo: '/index'
	});
});
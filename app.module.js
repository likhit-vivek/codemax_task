var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
	
	$routeProvider
	.when('/index', {
		templateUrl: 'inventory.html',
		controller: 'InventoryController',
		controllerAs: 'inventory'
	})
	.when('/addModel', {
		templateUrl: 'addModel.html',
		controller: 'ModelsController',
		controllerAs: 'models'
	})
	.when('/addManufacturer', {
		templateUrl: 'addManufacturer.html',
		controller: 'ManufacturersController',
		controllerAs: 'manufacturers'
	})
	.otherwise({
		redirectTo: '/index'
	});
});
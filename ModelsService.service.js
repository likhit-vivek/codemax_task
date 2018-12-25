app.service("ModelsService", ['$http', '$httpParamSerializerJQLike', '$q', function ($http, $httpParamSerializerJQLike, $q) {
	
	var self = this;
	
	self.addModel = function (formData) {
		var def = $q.defer();
		
		$http({
			url: 'model.php',
			method: 'POST',
			data: $httpParamSerializerJQLike(formData),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.then(function (response) {
			def.resolve(response.data);
		}, function (response) {
			def.reject(response);
		});
		
		return def.promise;
	}
	
	self.getInventory = function () {
		var def = $q.defer();
		
		$http.get('model.php?inventory=true')
		.then(function (response) {
			def.resolve(response.data);
		}, function (response) {
			def.reject(response);
		});
		
		return def.promise;
	}
	
	self.getModels = function (manufacturer, model) {
		var def = $q.defer();
		
		$http({
			url: 'model.php',
			method: 'GET',
			params: { 'manf': manufacturer, 'model': model },
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.then(function (response) {
			def.resolve(response.data);
		}, function (response) {
			def.reject(response);
		});
		
		return def.promise;
	}
	
	self.markAsSold = function (id) {
		var def = $q.defer();
		
		$http({
			url: 'model.php',
			method: 'POST',
			data: $httpParamSerializerJQLike({'id': id, 'flag': true}),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.then(function (response) {
			def.resolve(response.data);
		}, function (response) {
			def.reject(response);
		});
		
		return def.promise;
	}
}]);
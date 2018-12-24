app.service('ManufacturersService', ['$http', '$httpParamSerializerJQLike', '$q', function ($http, $httpParamSerializerJQLike, $q) {
	
	var self = this;
	
	self.addManufacturer = function (formData) {
		var def = $q.defer();
		
		$http({
			url: 'manufacturer.php',
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
	
	self.getManufacturers = function () {
		var def = $q.defer();
		
		$http.get('manufacturer.php')
		.then(function (response) {
			def.resolve(response.data);
		}, function (response) {
			def.reject(response);
		});
		
		return def.promise;
	}
}]);
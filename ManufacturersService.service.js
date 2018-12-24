app.service('ManufacturersService', ['$http', '$q', function ($http, $q) {
	
	var self = this;
	
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
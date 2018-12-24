app.service("ModelsService", ['$http', '$q', function ($http, $q) {
	
	var self = this;
	
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
}]);
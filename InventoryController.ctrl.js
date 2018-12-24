app.controller("InventoryController", ['ModelsService', 'ManufacturersService', 
					function (ModelsService, ManufacturersService) {
	
	var self = this;
	self.manufacturers = [];
	self.models = [];
	self.errorText = "";
	
	ModelsService.getInventory().then(function (data) {
		
		self.models = data;
		self.errorText = "";
		
	}, function (data) {
		
		self.errorText = data.status + " " + data.statusText;
		
	});
	
	ManufacturersService.getManufacturers().then(function (data) {
		
		angular.forEach(data, function (value, key) {
			self.manufacturers[value.id] = value.name;
		});
		
		self.errorText = "";
	
	}, function (data) {
		
		self.errorText = data.status + " " + data.statusText;
		
	});
}]);
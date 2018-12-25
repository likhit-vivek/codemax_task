app.controller("InventoryController", ['ModelsService', 'ManufacturersService', '$timeout',
					function (ModelsService, ManufacturersService, $timeout) {
	
	var self = this;
	self.manufacturers = [];
	self.models = [];
	self.modelsList = [];
	self.errorText = "";
	self.successText = "";
	
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
	
	self.showModal = function (manufacturer, model) {
		
		ModelsService.getModels(manufacturer, model).then(function (data) {
			
			self.modelList = data;
			self.errorText = "";
			$('#myModal').modal({'show': true});
		}, function (data) {
			self.errorText = data.status + " " + data.statusText;
		});
	}
	
	self.sell = function (id) {
		
		ModelsService.markAsSold(id).then(function (data) {
			
			if(data.success) {
				self.successText = "Sold successfully!";
				self.errorText = "";
				$timeout(function () { self.successText=""; }, 3000);
				$('#'+id).remove();
			} else {
				self.successText = "";
				self.errorText = data.msg;
				$timeout(function () { self.errorText=""; }, 3000);
			}
		}, function (data) {
			self.successText = "";
			self.errorText = "Unable to sell. Try again.";
			$timeout(function () { self.errorText=""; }, 3000);
		});
	}
}]);
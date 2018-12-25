app.controller("ModelsController", ['ModelsService', 'ManufacturersService', '$timeout',
					function (ModelsService, ManufacturersService, $timeout) {
	
	var self = this;
	self.manufacturers = [];
	self.errorText = "";
	self.formData = { 'name': '', 'color': '', 'year': '', 'regNum': '', 'note': '', 'functionName': 'addModel' }
	
	ManufacturersService.getManufacturers().then(function (data) {
		
		self.manufacturers = data;
		self.errorText = "";
	}, function (data) {
		
		self.errorText = data.status + " " + data.statusText;
	});
	
	self.submit = function () {
		
		if(self.formData.manufacturer == null) self.formData.manufacturer = "";
		
		ModelsService.addModel(self.formData).then(function (data) {
			
			if(data.success) {
				self.successText = "Model added successfully!";
				self.errorText = "";
				$timeout(function () { self.successText=""; }, 3000);
			} else {
				self.successText = "";
				self.errorText = data.msg;
				$timeout(function () { self.errorText=""; }, 3000);
			}
		}, function (data) {
			self.successText = "";
			self.errorText = "Unable to add model. Try again.";
			$timeout(function () { self.errorText=""; }, 3000);
		});
	}
}]);
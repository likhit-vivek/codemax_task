app.controller("ModelsController", ['ModelsService', 'ManufacturersService', 
					function (ModelsService, ManufacturersService) {
	
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
		
		ModelsService.addModel(self.formData).then(function (data) {
			
			if(data.success) {
				self.successText = "Model added successfully!";
				self.errorText = "";
			} else {
				self.successText = "";
				self.errorText = data.msg;
			}
		}, function (data) {
			self.successText = "";
			self.errorText = "Unable to add model. Try again.";
		});
	}
}]);
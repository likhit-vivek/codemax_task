app.controller('ManufacturersController', ['ManufacturersService', 
					function (ManufacturersService) {
	
	var self = this;
	
	self.formData = {'name': '', 'functionName': 'addManufacturer'};
	self.successText = "";
	self.errorText = "";
	
	self.submit = function () {
		
		ManufacturersService.addManufacturer(self.formData).then(function (data) {
			if(data.success) {
				self.successText = "Manufacturer added successfully!";
				self.errorText = "";
			} else {
				self.successText = "";
				self.errorText = data.msg;
			}
		}, function (data) {
			
			self.successText = "";
			self.errorText = "Unable to add manufacturer. Try again.";
		})
	}
}]);
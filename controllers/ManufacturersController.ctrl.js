app.controller('ManufacturersController', ['ManufacturersService', '$timeout',
					function (ManufacturersService, $timeout) {
	
	var self = this;
	
	self.formData = {'name': '', 'functionName': 'addManufacturer'};
	self.successText = "";
	self.errorText = "";
	
	self.submit = function () {
		
		ManufacturersService.addManufacturer(self.formData).then(function (data) {
			if(data.success) {
				self.successText = "Manufacturer added successfully!";
				self.errorText = "";
				$timeout(function () { self.successText=""; }, 3000);
			} else {
				self.successText = "";
				self.errorText = data.msg;
				$timeout(function () { self.errorText=""; }, 3000);
			}
		}, function (data) {
			
			self.successText = "";
			self.errorText = "Unable to add manufacturer. Try again.";
			$timeout(function () { self.errorText=""; }, 3000);
		})
	}
}]);
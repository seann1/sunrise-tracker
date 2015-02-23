var app = angular.module("sunrise-times", []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.posts = [];

		$scope.getTimes = function() {

			var address = $scope.address + ", " + $scope.city + ", " + $scope.state;
			address = address.toString();

			$.ajax({
    		url: "http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&callback=mycallback",
    		dataType: "JSONP",
    		success: function(data) {
    			var json = data;
    			console.log(json.results.sunrise);
    		}
			});


			// var geocoder = new google.maps.Geocoder();
			// geocoder.geocode( { 'address': address}, function(results, status) {
  	// 		if (status == google.maps.GeocoderStatus.OK)
  	// 	{
   //    // do something with the geocoded result
   //    //

   //    console.log(results);
			// console.log(results[0].geometry.location.lat());
   //    console.log(results[0].geometry.location.lat());
  	// 		}
			// });

			// $scope.address = '';
			// $scope.city = '';
			// $scope.state = '';
			// $scope.startDate = '';
			// $scope.endDate = '';
		}; //end of getTimes();
									 

	}]);
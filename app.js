var app = angular.module("sunrise-times", []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.posts = [];

		$scope.getTimes = function() {

			var address = $scope.address + ", " + $scope.city + ", " + $scope.state;
			address = address.toString();

			var startDate = $scope.startDate;
			var startDateMilli = new Date($scope.startDate).getTime();
			var endDateMilli = new Date($scope.endDate).getTime();



			var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': address}, function(results, status) {
  			if (status == google.maps.GeocoderStatus.OK)
  			{

   		//make api call inside of call to google maps api
	   			while (startDateMilli <= endDateMilli) {
	 					var sunriseurl = "http://api.sunrise-sunset.org/json?lat=" + results[0].geometry.location.lat() + "&lng=" + results[0].geometry.location.lng() + "&date=" + startDate + "&callback=mycallback"
			   		$.ajax({
			    		url: sunriseurl,
			    		dataType: "JSONP",
			    		success: function(data) {
			    			$("#sunrise").text(data.results.sunrise);
			    			console.log(data);
			    		} 	//end of success function
						}); //end of api call
			   	} //end of while loop
  			}
			});

			$scope.address = '';
			$scope.city = '';
			$scope.state = '';
			$scope.startDate = '';
			$scope.endDate = '';

		}; //end of getTimes();
	}]);
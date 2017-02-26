var controllers = angular.module('ghumante.controller', []);

controllers.controller('loginController', ['$scope', '$auth', '$state','$http', function($scope, $auth, $state,$http) {

	var params  = {
		type : 'school',
		
	}

	$http
		.get('http://localhost:4040/api/v1/feature/fetch',{params:params})
		.success(function(res){
			console.log(res)
		})


	$scope.authenticate = function(provider) {

		$auth.authenticate(provider)
			.then(function(response) {
				if (response) {
					console.log(response.data.data.token);
					$state.go('dash');
				}

			})
			.catch(function(err) {
				console.log(err);
			})
	};
}]);

controllers.controller('dashController', ['$scope', function($scope) {

	$scope.newitinerary = {};
	$scope.newitinerary.itinerary = {};

	$scope.startAddingItinerary = function(days){
		if(days){
			$scope.currentDay = 1;
			angular.element('#myModal').modal('show');
		}

	}

	$scope.continue = function(){
		if($scope.newitinerary.days > $scope.currentDay){
			$scope.currentDay++;
		}else{
			console.log('FInised',$scope.newitinerary.itinerary);
			angular.element('#myModal').modal('hide');
		}
	}

	$scope.previous = function(){
		if($scope.currentDay>1){
			$scope.currentDay--;
		}
	}

	$scope.getButtonStatus = function(buttonType){
		if($scope.newitinerary.days){
			if(buttonType === 'previous'){
				return $scope.currentDay > 1 ? false : true;
			}else{
				return $scope.currentDay <= $scope.newitinerary.days ? false : true;
			}
		}else{
			return true;
		}


	}

}]);


angular
	.module('searchform.module')
	.component('searchForm', {
	    templateUrl: '../app/js/searchform/searchform.template.html',
	    bindings: {},
	    controller: function($scope,$firebaseArray,$firebaseObject,firbaseService) {
	    	$scope.showList = false;
			$scope.pickup = '';
			$scope.dropoff = '';
			var locations = [];
			var items = firbaseService.getFirbaseData("locations").then(function(data){
				angular.forEach(data,function(key,value){
					locations.push(key.toLowerCase());
				});
				$scope.locations = locations;
			},function(error){
				console.log(error);
			});

			$scope.search = function (value) {
				return value.indexOf($scope.pickup.toLowerCase()) >= 0 || value.indexOf($scope.pickup.toLowerCase()) >= 0;
			}

			$scope.selectPickupPoint = function(value) {
				$scope.pickup = value;
				$scope.showList = false;
			}

			$scope.selectDropPoint = function(value) {
				$scope.dropoff = value;
				$scope.showList = false;
			}

			$scope.keyupevt = function(event) {
				if(event.keyCode == 8) 
					$scope.showList = false;
				else 
					$scope.showList = true;
			}

		}
	});
angular
	.module('searchform.module')
	.factory('firbaseService', ['$firebaseObject','$q',	 
    function($firebaseObject,$q) {
    var service = {};
    // $http.get('/getdata.php').then(function (response) {
    //     responseData = response.data;
    //     console.log(response.data);
    // });
    service.getFirbaseData = function(param) {
    	var deffered = $q.defer();

		var ref = firebase.database().ref();
		var obj = $firebaseObject(ref.child(param));
		obj.$loaded()
			.then(function(data) {
			service.responseData = data; // true
			deffered.resolve(data);
		})
		.catch(function(error) {
			console.error("Error:", error);
		});
		return deffered.promise;
    }
    return service;
}]);


// angular
// 	.module('searchform.module')
// 	.service('firbaseService',['$firebaseObject',function($firebaseObject){
// 		var getFirbaseData = function (param){
// 			var ref = firebase.database().ref();
// 			var obj = $firebaseObject(ref.child(param));
// 			return obj;
// 		}

// 		return {
// 			getFirbaseData : getFirbaseData 
// 		};
// 	}]);
//(function(){
	var chessApp = angular.module('chessApp');

	chessApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
		console.log('UsersController loaded...');

		$scope.getUsers = function(){
			$http.get('/chess/users').success(function(response){
				$scope.users = response;
		});
	}

		$scope.getUser = function(){
			var id = $routeParams.id;
			$http.get('/chess/users/'+id).success(function(response){
				$scope.user = response;
		});
	}

		$scope.addUser = function(){
			$http.post('/chess/users/', $scope.user).success(function(response){
				window.location.href='#/users';
		});
	}

		$scope.updateUser = function(){
			var id = $routeParams.id;
			$http.put('/chess/users/'+id, $scope.user).success(function(response){
				window.location.href='#/users';
		});
	}

		$scope.removeUser = function(id){
			$http.delete('/chess/users/'+id).success(function(response){
				window.location.href='#/users';
		});
		}
	}]);
//})();
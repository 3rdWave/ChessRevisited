//(function(){
	var chessApp = angular.module('chessApp');

	chessApp.controller('TurnsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
		console.log('TurnsController loaded...');

		$scope.getTurns = function(){
			$http.get('/chess/turns/').success(function(response){
				$scope.turns = response;
		});
	}

		$scope.getTurns= function(){
			var id = $routeParams.id;
			$http.get('/chess/turns/'+id).success(function(response){
				$scope.turns = response;
		});
	}

		$scope.addTurns = function(){
			console.log($scope.turns);
			$http.post('/chess/turns/', $scope.turns).success(function(response){
				window.location.href='#/turns';
		});
	}

		$scope.updateTurns = function(){
			var id = $routeParams.id;
			$http.put('/chess/turns/'+id, $scope.turns).success(function(response){
				window.location.href='#/turns';
		});
	}

		$scope.removeTurns = function(id){
			$http.delete('/chess/turns/'+id).success(function(response){
				window.location.href='#/turns';
		});
		}
	}]);
//})();
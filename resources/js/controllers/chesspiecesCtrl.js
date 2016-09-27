//(function(){
	var chessApp = angular.module('chessApp');

	chessApp.controller('ChesspiecesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
		console.log('ChesspiecesController loaded...');

		$scope.getChesspieces = function(){
			$http.get('/chess/chesspieces/').success(function(response){
				$scope.chesspieces = response;
		});
	}

		$scope.getChesspiece = function(){
			var id = $routeParams.id;
			$http.get('/chess/chesspieces/'+id).success(function(response){
				$scope.chesspiece = response;
		});
	}

		$scope.addChesspieces = function(){
			console.log($scope.chesspiece);
			$http.post('/chess/chesspieces/', $scope.chesspiece).success(function(response){
				window.location.href='#/chesspieces';
		});
	}

		$scope.updateChesspieces = function(){
			var id = $routeParams.id;
			$http.put('/chess/chesspieces/'+id, $scope.chesspiece).success(function(response){
				window.location.href='#/chesspieces';
		});
	}

		$scope.removeChesspieces = function(id){
			$http.delete('/chess/chesspieces/'+id).success(function(response){
				window.location.href='#/chesspieces';
		});
		}
	}]);
//})();

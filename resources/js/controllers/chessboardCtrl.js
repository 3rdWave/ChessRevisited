//(function () {
	var chessApp = angular.module('chessApp');

	chessApp.controller('ChessboardsController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
		console.log('ChessboardsController loaded...');

		$scope.getChessboards = function () {
			var id = $routeParams.id;
			$http.get('/chess/chessboards/' + id).success(function (response) {
				$scope.chessboards = response;
			});
		}

		$scope.addChessboards = function () {
			console.log($scope.chessboards);
			$http.post('/chess/chessboards/', $scope.chessboards).success(function (response) {
				window.location.href = '#/chessboards';
			});
		}

		$scope.updateChessboards = function () {
			var id = $routeParams.id;
			$http.put('/chess/chessboards/' + id, $scope.chessboards).success(function (response) {
				window.location.href = '#/chessboards';
			});
		}

		$scope.removeChessboards = function (id) {
			$http.delete('/chess/chessboards/' + id).success(function (response) {
				window.location.href = '#/chessboards';
			});
		}
	}]);
//})();
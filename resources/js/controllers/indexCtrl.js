//(function () {
	var chessApp = angular.module('chessApp');

	chessApp.controller('IndexController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
		console.log('IndexController loaded...');

		$scope.getIndex = function () {
			$http.get('/').success(function (response) {
				$scope.index = response;
			})
		};
	}]);
//})();

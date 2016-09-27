angular.module('chessApp').config(function($routeProvider)
    {
	$routeProvider.when('/', {
		controller:'IndexController',
		templateUrl:'views/pages/home/index.html'
	})

	.when('/users', {
		controller:'UsersController',
		templateUrl:'views/pages/users/index.html'
	})

	.when('/users/edit/:id',{
		controller:'UsersController',
		templateUrl:'views/pages/users/edit_user.html'
	})

	.when('/users/add', {
		controller:'UsersController',
		templateUrl:'views/pages/users/add_user.html'
	})

	.when('/users/delete/:id',{
		controller:'UsersController',
		templateUrl:'views/pages/users/delete_user.html'
	})

	.when('/game', {
		controller:'ChessboardsController',
		templateUrl:'views/pages/game/index.html'
	})


	.otherwise({
		redirectTo: '/'
	});
});
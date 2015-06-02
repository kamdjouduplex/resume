'use strict';

var app = angular.module('resumeApp', ['ngRoute']);

app.controller('appCtrl', ['$scope', function($scope) {
	$scope.updateday = new Date('2015', '02', '12');
}]);

app.config(['$routeProvider' , function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/persoinfo.html',
		controller: 'appCtrl'
	})
	.when('/education-backgrounds',{
		templateUrl: 'views/background.html',
		controller: 'appCtrl'
	})
	.when('/technical-skills',{
		templateUrl: 'views/techskill.html',
		controller: 'appCtrl'
	})
	.when('/professional-experiences', {
		templateUrl: 'views/profexperience.html',
		controller: 'appCtrl'
	})
	.when('/career-objectives', {
		templateUrl: 'views/career.html',
		controller: 'appCtrl'
	})
	.when('/personal-quality', {
		templateUrl: 'views/persoquality.html',
		controller: 'appCtrl'
	})
	.otherwise({redirectTo: '/'});
}]);
	
var mapApp = angular.module('mapApp', []);
mapApp.controller('mapController', function($scope){
	$scope.message = "Hello World";
	$scope.countries = countries;

});
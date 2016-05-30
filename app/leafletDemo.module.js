var leafletDemo = angular.module('leafletDemo', ['ui.router']);

leafletDemo.config(function($stateProvider, $urlRouterProvider) {
	// for any unmatched url, redirect to /home
	$urlRouterProvider.otherwise("/home");
	// now set up the states
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "app/components/home/homeView.html"
	})
	.state('map', {
		url: "/map",
		templateUrl: "app/components/map/mapView.html"
	});
});
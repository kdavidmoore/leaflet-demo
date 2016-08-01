leafletDemo.controller('mapController', ['$window', function($window) {
	
	var testMap = $window.L.map('test-map').setView([33.862, -84.687], 10);

	$window.L.tileLayer.wms(baseURL, {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		layers: 'topp:states',
		format: 'image/png',
		transparent: true,
		version: '1.1.0'
	}).addTo(testMap);
}]);

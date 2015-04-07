/*jshint camelcase: false */
'use strict';

app.controller('GalleryCtrl', function($scope, $resource) {
	var Galleries = $resource('http://daydreamernightwalker.com/wordpress/api/get_recent_posts/',
		{ callback: 'JSON_CALLBACK' },
		{ get: { method: 'JSONP' } }
	);

	Galleries.get({
		post_type: 'galleries'
	}, function(data) {
		$scope.galleries = data.posts;
	});

	console.log($scope.galleries);
	console.log(Galleries);
});
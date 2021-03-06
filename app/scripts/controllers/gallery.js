/*jshint camelcase: false */
'use strict';

app.controller('GalleryViewCtrl', function($scope, $routeParams, $resource, Page) {
	var GalleryAPI = $resource('http://daydreamernightwalker.com/wordpress/api/get_post/',
		{ callback: 'JSON_CALLBACK' },
		{ get: { method: 'JSONP' } }
	);

	GalleryAPI.get({
		post_type: 'galleries',
		id: $routeParams.galleryId
	}, function(data) {
		$scope.gallery = data.post;
		$scope.nextGallery = data.next_url;
		$scope.prevGallery = data.previous_url;

		var title = data.post.title_plain + ' | Day Dreamer Night Walker';
		Page.setTitle(title);
	});
});
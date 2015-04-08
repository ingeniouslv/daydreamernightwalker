/* global app: true */
/* exported app */
'use strict';

var app = angular.module('siteApp')
  .factory('Page', function() {
	var title = 'Day Dreamer Night Walker';
	return {
		title: function() { return title ; },
		setTitle: function(newTitle) { title = newTitle; }
	};
})
  .controller('MainCtrl', function ($scope, Page) {
    $scope.Page = Page;
  });

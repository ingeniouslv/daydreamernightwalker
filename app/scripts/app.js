'use strict';

angular
  .module('siteApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'GalleryCtrl'
      })
      .when('/gallery/:galleryId', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });

"use strict";angular.module("siteApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"GalleryCtrl"}).when("/gallery/:galleryId",{templateUrl:"views/gallery.html",controller:"GalleryViewCtrl"}).otherwise({redirectTo:"/"})}]);var app=angular.module("siteApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);app.factory("Galleries",["$resource",function(a){return a("/scripts/ddnw.json")}]),app.controller("GalleryCtrl",["$scope","$resource",function(a,b){var c=b("http://daydreamernightwalker.com/wordpress/api/get_recent_posts/",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}}).get({post_type:"galleries"},function(b){a.galleries=b.posts});console.log(a.galleries),console.log(c)}]),app.controller("GalleryViewCtrl",["$scope","$routeParams","$resource",function(a,b,c){var d=c("http://daydreamernightwalker.com/wordpress/api/get_post/",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}}),e=d.get({post_type:"galleries",id:b.galleryId},function(b){a.gallery=b.post});a.nextGallery=e.next_url,a.prevGallery=e.previous_url,console.log(e),console.log(e.post)}]);
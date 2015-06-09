'use strict';


/**
 * @ngdoc overview
 * @name spotsearchApp
 * @description
 * # spotsearchApp
 *
 * Main module of the application.
 */
angular
  .module('spotsearchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when( '/album/:albumId/', {
        templateUrl: 'views/album.html',
        controller: 'AlbumController'
      })
      .when( '/search/artist/:query', {
        templateUrl: 'views/artistsearch.html',
        controller: 'ArtistSearchController'
      })
      .when( '/search/album/:query', {
        templateUrl: 'views/albumsearch.html',
        controller: 'AlbumSearchController'
      })
      .when('/about', {

      })
      .otherwise({
        redirectTo: '/'
      });
  });

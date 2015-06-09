'use strict';
// album search controller

angular.module( 'spotsearchApp' )
	.controller( 'AlbumSearchController', [ '$scope', '$routeParams', 'searchFactory', 
		function( $scope, $routeParams, searchFactory ) {

			$scope.types = 'album';
			$scope.query = $routeParams.query;

			$scope.results = {};
			searchFactory.getResults( $routeParams.query, 'album' )
				.success( function( results ) {
					$scope.results = results;
					console.log( 'this is the album results: ', results );
				})
				.error( function( error ) {
					$scope.status = 'Unable to load search results bruhhh: ' + error.message;
				});
		}
	]);
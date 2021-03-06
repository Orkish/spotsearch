'use strict';
// AlbumController

angular.module( 'spotsearchApp' )
	.controller( 'AlbumController', [ '$scope', 'searchFactory', '$routeParams', 
		function( $scope, searchFactory, $routeParams ) {

			searchFactory.getAlbum( $routeParams.albumId )
				.success( function( results ) {
					$scope.results = results;
				})
				.error( function( error ) {
					$scope.status = 'Unable to load album bruhh: ' + error.message;
				});

				$scope.playTrack = function( url ) {
					$scope.player.load({
						src: url
					});
					$scope.player.play();
				};
		}
	]);
'use strict';

// search controller

angular.module( 'spotsearchApp' )
	.controller( 'SearchController', [ '$scope', '$location',
		function( $scope, $location ) {

			$scope.types = 'album';

			$scope.runSearch = function() {

				// searchFactory.getResults( $scope.searchQuery, $scope.types )
				// 	.success( function( results ) {
				// 		$scope.results = results;
				// 		console.log( 'these are the search results', $scope.results );
				// 	})
				// 	.error( function( error ) {
				// 		$scope.status = 'Unable to load search results bruh: ' + error.message;
				// 	});

				$location.path( '/search/' + $scope.types + '/' + $scope.searchQuery );
				
			};

		}
	]);
'use strict';
//album search controller

angular.module('spotsearchApp')
.controller('ArtistSearchController', ['$scope', '$routeParams', 'searchFactory',
function($scope, $routeParams, searchFactory) {

  $scope.types = 'artist';
  $scope.query = $routeParams.query;

  $scope.results = {};
  searchFactory.getResults($routeParams.query, 'artist')
  .success(function(results){
    $scope.results = results;
    console.log('results of artist search:', results);
  })
  .error(function(error){
    $scope.status = 'Unable to load search results bruhhh: ' + error.message;
  });

}
]);
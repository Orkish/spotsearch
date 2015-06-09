'use strict';

describe('Controller: SearchController', function () {

  // load the controller's module
  beforeEach(module('spotsearchApp'));

  var SearchController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchController = $controller('SearchController', {
      $scope: scope
    });
  }));

  it('should default search type to album', function () {
    expect(scope.types).toBe('album');
  });

  // describe( '$scope.runSearch' ,function() {

  //   it( 'should update the browser location URL to the search query and types', function() {
  //     scope.searchQuery = 'biggie';
  //     scope.types = 'artist';
  //     scope.runSearch();
  //     expect( location.path() ).toBe( '/search/artist/biggie' );

  //   });

  // });
});

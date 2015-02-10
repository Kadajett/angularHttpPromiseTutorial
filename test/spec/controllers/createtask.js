'use strict';

describe('Controller: CreatetaskCtrl', function () {

  // load the controller's module
  beforeEach(module('httpApp'));

  var CreatetaskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatetaskCtrl = $controller('CreatetaskCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

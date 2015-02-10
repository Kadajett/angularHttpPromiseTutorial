'use strict';

/**
 * @ngdoc function
 * @name httpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the httpApp
 */
angular.module('httpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

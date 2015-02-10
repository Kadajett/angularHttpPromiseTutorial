'use strict';

/**
 * @ngdoc function
 * @name httpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the httpApp
 */
angular.module('httpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

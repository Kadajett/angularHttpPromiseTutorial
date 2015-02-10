'use strict';

/**
 * @ngdoc overview
 * @name httpApp
 * @description
 * # httpApp
 *
 * Main module of the application.
 */
angular
  .module('httpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
     
      
      .otherwise({
        redirectTo: '/'
      });


  })
  .run(function ($rootScope){
    $rootScope.endPoint = 'http://localhost:8080'
  });

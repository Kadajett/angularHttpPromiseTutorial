'use strict';

/**
 * @ngdoc function
 * @name httpApp.controller:CreatetaskCtrl
 * @description
 * # CreatetaskCtrl
 * Controller of the httpApp
 */
angular.module('httpApp')
  .controller('CreatetaskCtrl', function ($scope, task, $modalInstance) {
  	$scope.init = function(){
  		$scope.task = {
  			title: '',
  			desc: '',
  			color: '',
  			done: false
  		}
  	}

  	$scope.submit = function(){
  		task.createTask($scope.task)
  		.then(function(){
  			$modalInstance.close();
  		}, function(){
  			$scope.task = {
  			title: 'Failed',
  			desc: 'Failed',
  			color: '',
  			done: false
  		}
  		})
  	}

  	$scope.init();
  });

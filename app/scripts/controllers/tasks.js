'use strict';

/**
 * @ngdoc function
 * @name httpApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the httpApp
 */
angular.module('httpApp')
  .controller('TasksCtrl', function ($scope, task, $modal) {
  	
  	$scope.init = function(){

  		$scope.getAll();
  	}

  	$scope.create = function(){

  		var modalInstance = $modal.open({
  			templateUrl: '/views/createtask.html',
  			controller: 'CreatetaskCtrl'
  		});

  		modalInstance.result.then(function(){
  			// success
  			$scope.getAll();
  		}, function(){
  			// error
  			$scope.getAll();
  		})
  	}

  	$scope.getAll = function(){
  		task.getAllTasks()
  		.then(function(res){
  			// success
  			$scope.taskList = task.taskList;
  		}, function(err){
  			// error
  		})
  	}

  	$scope.deleteTask = function(id){
  		task.deleteTask(id)
  		.then(function(res){
  			// success
  			$scope.getAll();
  		}, function(){
  			// error
  			$scope.getAll();
  		})
  	}

  	$scope.init();
  });

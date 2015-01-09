// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
	
	$urlRouterProvider.otherwise('/tab/docs')

	$stateProvider.state('tab', {
		url : '/tab',
		abstract : true,
		templateUrl : 'templates/tabs.html'
	});

	$stateProvider.state('tab.doc-list', {
		url : '/docs',
		views : {
			'doc-list' : {
				templateUrl : 'templates/doc-list.html',
				controller : 'DocController'
			}
		}
	});
	
	$stateProvider.state('tab.doc-task-list', {
	      url: '/doc/:docId',
	      views: {
	        'doc-list': {
	          templateUrl: 'templates/doc-task-list.html',
	          controller: 'DocController'
	        }
	      }
	    });
	
	$stateProvider.state('tab.doc-task-detail', {
	      url: '/doc/:docId/detail/:taskId',
	      views: {
	        'doc-list': {
	          templateUrl: 'templates/doc-task-detail.html',
	          controller: 'DocController'
	        }
	      }
	    });
	
	
	$stateProvider.state('tab.adopt', {
	      url: '/adopt',
	      views: {
	        'adopt-tab': {
	          templateUrl: 'templates/adopt.html'
	        }
	      }
	    });

	$stateProvider.state('home', {
		url : '/',
		templateUrl : 'templates/tabs.html'
	});

});


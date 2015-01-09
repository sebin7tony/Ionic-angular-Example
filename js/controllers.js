angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})

//My application
.controller('DocController', function($scope, $stateParams, DocService) {
	  // "Pets" is a service returning mock data (services.js)
	
	 // alert("inside");
	  
	  $scope.lastDocID = $stateParams.docId;
	  
	  $scope.docs = DocService.all();
	  $scope.tasks = DocService.allTask($stateParams.docId);
	  $scope.task = DocService.get($stateParams.docId,$stateParams.taskId);
});


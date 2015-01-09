angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})


.factory('DocService', function() {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var documentList = [
	                      {
	                          "document": "document 0",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc0"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc0"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc0"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 1",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc1"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc1"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc1"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 2",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc2"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc2"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc2"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 3",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc3"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc3"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc3"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 4",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc4"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc4"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc4"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 5",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc5"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc5"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc5"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 6",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc6"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc6"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc6"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 7",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc7"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc7"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc7"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 8",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc8"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc8"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc8"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 9",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc9"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc9"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc9"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 10",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc10"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc10"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc10"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 11",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc11"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc11"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc11"
	                              }
	                          ]
	                      },
	                      {
	                          "document": "document 12",
	                          "tasks": [
	                              {
	                                  "Taskname": "Task 0",
	                                  "description": "This is used to make taks0 of doc12"
	                              },
	                              {
	                                  "Taskname": "Task 1",
	                                  "description": "This is used to make taks1 of doc12"
	                              },
	                              {
	                                  "Taskname": "Task 2",
	                                  "description": "This is used to make taks2 of doc12"
	                              }
	                          ]
	                      }
	                  ];

	  return {
	    all: function() {
	    	
	      return documentList;
	    },
	    allTask : function(index){
	    	
	    	return documentList[index];
	    },
	    get: function(docIndex,taskIndex) {
	      // Simple index lookup
	    	
	    	var docInd = 0;
	    	if(docIndex !== undefined){
	    		docInd = docIndex;
	    	}
	    	var temp = documentList[docInd].tasks[Number(taskIndex)];
	    	return temp;
	    }
	  }
	});

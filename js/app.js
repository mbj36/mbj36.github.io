 var myApp = angular.module("myApp", ["firebase"]);

      myApp.controller("MyController", function($scope, $firebaseArray) {
          //CREATE A FIREBASE REFERENCE
          var ref = new Firebase("https://form-2014.firebaseio.com/");

          // GET MESSAGES AS AN ARRAY
          $scope.messages = $firebaseArray(ref);

          //ADD MESSAGE METHOD
          $scope.addMessage = function() {//ADD TO FIREBASE
              $scope.messages.$add({
                Entryno: $scope.entry,
                Subject: $scope.sub
              });
              //RESET MESSAGE
              $scope.sub = "";
              $scope.entry = "";
          }
        });
 
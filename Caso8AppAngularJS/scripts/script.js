var app = angular.module("friendsForm", [])

app.controller("simpleController", function($scope, $http){
    var request = {
        method: "get",
        url: "friends.json",
        dataType: "json",
        contentType: "application/json"
    };    
    
    $scope.counter = 0;
    $scope.arrfriends = new Array;

    $http(request)
    .then(function (jsonData){
        $scope.arrfriends = jsonData.data;
        $scope.list = $scope.arrfriends;
        $scope.counter = $scope.list.length;
    }), function (error){

    };



})






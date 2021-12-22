var app = angular.module("EncuestaApp", []);

app.controller("TestController", function($scope, $http){

    var request = {
        method: "GET",
        url: "key.json",
        dataType: "json",
        contentType: "application/json"
    };

    $scope.questions = new Array;
    $scope.answers = new Array;
    $scope.validAnswers = 0;

    $http(request)
        .then(function(jsonData){
            $scope.questions = jsonData.data;
            $scope.questions.answers = $scope.answers;
        }), function(error){

        };
    
    $scope.validate = function(question){
        if(question.correctAnswer == question.userAnswer){
            question.status = "correct";
            $scope.validAnswers++;
        }
        else{
            if(question.status == "correct"){
                question.status = "incorrect";
                $scope.validAnswers--;
            }
        }
        
        if($scope.validAnswers / $scope.questions.length >= 0.75){
            $scope.userStatus = "passed";
        }
    }

    
    

})
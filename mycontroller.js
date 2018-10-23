var app = angular.module('myApp', []);
app.controller('HelloController', function($scope){
    $scope.greeting = {
        text: 'Hello'
    };
});

app.controller('myController', function($scope, $timeout){
    var updateClock = function(){
        $scope.clock = new Date();
        $timeout(function(){
            updateClock();
        }, 1000);
    };
    updateClock();
});

app.controller('myController1', function($scope, $timeout){
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function(){
        $scope.clock.now = new Date();
    };
    setInterval(function(){
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});

app.controller('myController2', function($scope, $timeout){
    $scope.clock1 = new Date();
    var updateClock = function(){
        $scope.clock1 = new Date();
    };
    setInterval(function(){
        $scope.$apply(updateClock);
    }, 1000);
    //updateClock();
});


var app1 = angular.module('myApp1', []);

app1.controller('myController1', function($scope){
    $scope.module1 = '1111';
});

app1.controller('myController2', function($scope){
    $scope.module2 = '2222';
});
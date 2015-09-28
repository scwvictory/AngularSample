//ngSanitize --> ng-bind-html属性を使うためのモジュール
angular.module("myApp", ["ngSanitize"])
    .controller("MyController", ["$scope", "$timeout", function($scope, $timeout) {
        //$scope.myName = "松下";
        
        $scope.favs = [
            "丸", 
            "菊池", 
            "新井", 
            "エルドレッド", 
            "鈴木",];
        
        $timeout(function() {
            $scope.url = "http://www.google.com/";
        }, 3000);
    }]);
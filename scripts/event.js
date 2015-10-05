angular.module("myApp", [])
    .controller("MyController", ["$scope", function($scope) {
        $scope.greeting = "こんにちは、権兵衛さん！";
        $scope.message = "";
        
        $scope.onclick = function() {
            $scope.greeting = "こんにちは、" + $scope.myName + "さん！";
        };
        
        $scope.onpress = function($event) {
            var k = $event.which;
            if (!((k >= 48 && k <= 57) || k === 45 || k === 8 || k == 0)) {
                $event.preventDefault ();
            }
        };
        
        $scope.onclick1 = function() {
            $scope.message = "outerをクリックしました。";
        };
        
        $scope.onclick2 = function($event) {
            $event.stopPropagation();
            $scope.message = "innerをクリックしました。";
        }
    }]);
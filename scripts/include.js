angular.module("myApp", [])
    .run(["$templateRequest", function($templateRequest) {
        $templateRequest("templates/tmpl1.html");
        $templateRequest("templates/tmpl2.html");
    }])
    .controller("MyController", ["$scope", function($scope) {
        $scope.templates = [
            { title: "execution", url: "templates/tmpl1.html" },
            { title: "tempo", url: "templates/tmpl2.html" },
        ];
        
        $scope.onload = function() {
            console.log($scope.template);
        }
    }]);
angular.module("myApp", ["ngMessages"])
    .controller("MyController", ["$scope", function($scope) {
        $scope.errors = [
            { type: "required", message: "入力は必須です。" },
            { type: "maxlength", message: "文字数が多すぎます。"},
            { type: "minlength", message: "文字数が少なすぎます。"},
            { type: "email", message: "正しいメールアドレスを入力してください。"}
        ];
    }])
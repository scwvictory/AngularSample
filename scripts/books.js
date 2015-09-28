angular.module('myApp', [])
    .controller('MyController', ['$scope', function($scope) {
        $scope.books = [
            {
                isdn: 'XXX-X-XXXX-XXXX-X',
                title: 'XXXXXXXXXX',
                price: 9999,
                publish: 'XXXXXX',
                published: new Date(2015, 0, 1)
            },
            {
                isdn: 'XXX-X-XXXX-XXXX-X',
                title: 'XXXXXXXXXX',
                price: 9999,
                publish: 'XXXXXX',
                published: new Date(2015, 1, 1)
            },
            {
                isdn: 'XXX-X-XXXX-XXXX-X',
                title: 'XXXXXXXXXX',
                price: 9999,
                publish: 'XXXXXX',
                published: new Date(2015, 2, 1)
            }
        ];
    }]);
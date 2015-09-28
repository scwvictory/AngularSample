angular.module('myApp', [])
    .controller('MyController', function($scope, BookList) {
        $scope.books = BookList();
})
.value('BookList', function() {
    return [
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
});
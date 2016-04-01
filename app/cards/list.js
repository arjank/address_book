'use strict';

angular.module('addressBook.index', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cards', {
        templateUrl: 'cards/list.html',
        controller: 'ListCtrl'
    });
}])

.controller('ListCtrl', ['$scope', 'cards', '$location', function ($scope, cards, $location) {
    $scope.allCards = cards.getAll();

    $scope.editCard = (card) => {
        $location.url('/cards/' + card.id);
    };

    $scope.addCard = () => {
        $location.url('/cards/new');
    };
}]);

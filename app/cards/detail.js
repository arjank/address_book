'use strict';

angular.module('addressBook.detail', ['ngRoute', 'angular.validators'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cards/new', {
    templateUrl: 'cards/detail.html',
    controller: 'DetailCtrl'
  });
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cards/:cardId', {
    templateUrl: 'cards/detail.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', ['$scope', 'cards', 'countries', '$routeParams', '$location', function ($scope, cards, countries, $routeParams, $location) {
    let cardId = $routeParams.cardId;
    let originalCard;

    let backToOverview = () => {
        $location.url('/cards');
    };

    if (typeof(cardId) !== 'undefined') {
        originalCard = cards.getById(cardId);
        console.log(originalCard);
        if (originalCard === null) {
            alert('Card not found');
            backToOverview();
        }
    }

    $scope.back = backToOverview;

    $scope.countries = countries.getNames();

    $scope.removeCard = (card) => {
        if (confirm("Are you sure you want to remove this card? It cannot be undone!")) {
            cards.remove(card.id);
            backToOverview();
        }
    };

    $scope.submit = function(card) {
        console.log(card);
        if (typeof(cardId) === 'undefined') {
            cards.add(card);
        } else {
            cards.update(card);
        }

        backToOverview();
    };

    $scope.reset = function(form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }

        $scope.card = angular.copy(originalCard);
    };

    $scope.reset();
}]);
'use strict';

// Declare app level module which depends on views, and components
var addressBook = angular.module('addressBook', [
    'ngRoute',
    'ngStorage',
    'addressBook.index',
    'addressBook.detail'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/cards'});
}]);

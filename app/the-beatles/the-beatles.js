/**
 * Created by agonzalezmc on 14/5/17.
 */

'use strict';

angular.module('myApp.the-beatles', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/the-beatles', {
      templateUrl: 'the-beatles/the-beatles.html',
      controller: 'TheBeatlesCtrl'
    });
  }])

.controller('TheBeatlesCtrl', [function() {

}]);
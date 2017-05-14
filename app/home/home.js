/**
 * Created by agonzalezmc on 14/5/17.
 */

'use strict';

angular.module('myApp.home', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])

.controller('HomeCtrl', [function() {

}]);
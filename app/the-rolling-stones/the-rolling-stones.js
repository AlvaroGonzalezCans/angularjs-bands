/**
 * Created by agonzalezmc on 14/5/17.
 */
angular.module('myApp.the-rolling-stones', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/the-rolling-stones', {
        templateUrl: 'the-rolling-stones/the-rolling-stones.html',
        controller: 'TheRollingStonesCtrl'
      });
    }])

.controller('TheRollingStonesCtrl', [function() {

}]);
/**
 * Created by agonzalezmc on 14/5/17.
 */


angular.module('myApp.queen', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/queen', {
        templateUrl: 'queen/queen.html',
        controller: 'QueenCtrl'
      });
    }])

.controller('QueenCtrl', [function() {

}]);
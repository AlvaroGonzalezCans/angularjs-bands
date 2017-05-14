/**
 * Created by agonzalezmc on 14/5/17.
 */
angular.module('myApp.bar', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/bar', {
      templateUrl: 'bar/bar.html',
      controller: 'BarCtrl'
    });
  }])

.controller('BarCtrl', [function() {

}]);
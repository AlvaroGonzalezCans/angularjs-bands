/**
 * Created by agonzalezmc on 14/5/17.
 */

angular.module('myApp.foo', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/foo', {
    templateUrl: 'foo/foo.html',
    controller: 'FooCtrl'
  });
}])

.controller('FooCtrl', [function() {

}]);
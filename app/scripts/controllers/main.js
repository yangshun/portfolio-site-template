'use strict';

var NAME = 'Yang Shun';

angular.module('lab1App')
  .filter('to_trusted', ['$sce', function ($sce){
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }])
  .controller('AppCtrl', function ($scope) {
    $scope.name = NAME;
  })
  .controller('LandingCtrl', function ($scope) {

  })
  .controller('PortfolioCtrl', function ($scope, $http) {
    $http({method: 'GET', url: '/portfolio/portfolio.json'}).
      success(function(data, status, headers, config) {
        $scope.portfolio = data.data;
        setTimeout(function () {
          $('.carousel').carousel({
            interval: 3000
          });
        }, 0);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  });


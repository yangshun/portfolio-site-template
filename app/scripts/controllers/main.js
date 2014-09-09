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
    setTimeout(function () {
      $('.navbar').addClass('animated swing');
    }, 0);
    $scope.$on('$locationChangeStart', function (event) {
      setTimeout(function () {
        $('.page-title').removeClass('animated').addClass('animated rubberBand');
      }, 0);
    });
  })
  .controller('LandingCtrl', function ($scope) {
    setTimeout(function () {
      $('.main-thumbnail').addClass('animated bounceInDown');
      $('.welcome-message').addClass('animated bounceInUp');
      $('.introduction').addClass('animated bounceInUp');
    }, 0);
  })
  .controller('ResumeCtrl', function ($scope) {

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
  })
  .controller('ContactCtrl', function ($scope) {

    $scope.formSubmitted = false;

    $scope.checkForm = function () {
      $('#submit-btn').attr('disabled', !$scope.form.$valid);
    }

    $scope.submit = function () {
      $scope.formSubmitted = true;
      $('#contact-form').hide();
    }
  });


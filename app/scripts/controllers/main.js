'use strict';

var FIRST_NAME = 'Yang Shun';
var LAST_NAME = 'Tay';
var FACEBOOK_ID = 'yangshun';
var TWITTER_ID = 'yangshunz';
var GITHUB_ID = 'yangshun';

angular.module('PortfolioTemplate')
  .filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }])
  .controller('AppCtrl', function ($scope) {
    $scope.firstName = FIRST_NAME;
    $scope.lastName = LAST_NAME;
    $scope.facebookId = FACEBOOK_ID;
    $scope.twitterId = TWITTER_ID;
    $scope.githubId = GITHUB_ID;

    setTimeout(function () {
      $('.navbar').addClass('animated swing');
    }, 0);
    $scope.$on('$locationChangeStart', function (event) {
      setTimeout(function () {
        $('.page-title').removeClass('animated').addClass('animated tada');
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
    $http({method: 'GET', url: '/content/portfolio.json'}).
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

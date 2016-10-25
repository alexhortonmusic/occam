'use strict'

const app = angular.module('occam', ['ngRoute'])

app
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/boards', {
        templateUrl: 'partials/boards.html',
        controller: 'BoardCtrl'
      })
      .when('/logout', {
        templateUrl: 'partials/logout.html',
        controller: 'LogoutCtrl'
      })
  })

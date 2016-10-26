'use strict'

const app = angular.module('occam', ['ngRoute'])

app
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/fillOut', {
        templateUrl: 'partials/fillOut.html',
        controller: 'FillCtrl'
      })
      .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/logout', {
        templateUrl: 'partials/logout.html',
        controller: 'LogoutCtrl'
      })
      .otherwise('/profile')
  })

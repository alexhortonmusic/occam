'use strict'

const app = angular.module('occam', ['ngRoute'])

app
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
  })

'use strict'

const app = angular.module('occam', ['ngRoute', 'dndLists'])

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
      .when('/profile/:id', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/board/:boardId', {
        templateUrl: 'partials/groupBoard.html',
        controller: 'BoardCtrl'
      })
      .when('/logout', {
        templateUrl: 'partials/logout.html',
        controller: 'LogoutCtrl'
      })
      // .otherwise('/profile')
  })

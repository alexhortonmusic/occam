'use strict'

app.controller('LoginCtrl', function($scope, $http) {
    // $scope.title = 'Alex'

    $http
      .get('/')
      .then(res => {
        console.log('Hello')
      })
  })

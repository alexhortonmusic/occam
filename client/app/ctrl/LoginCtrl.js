'use strict'

app.controller('LoginCtrl', function($scope, $http) {

    $http.get('/api/login')
      .then(res => {
        $scope.title = res.data.title
      })
  })

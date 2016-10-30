'use strict'

app.controller('LogoutCtrl', function($scope, $http, $location) {

  $http
  .get('/api/logout')
  .then(res => {
    console.log(res.data)
    if (res.data === 'not logged in') {
      $location.url('/#/')
    }
  })

  $scope.logout = () => {
    $http
    .post('/api/logout')
    .then(res => {
      console.log(res.data)
      $location.url('/#/')
    })
  }
})

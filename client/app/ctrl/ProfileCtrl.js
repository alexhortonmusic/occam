'use strict'

app.controller('ProfileCtrl', function($scope, $http, $location) {
  $http
  .get('/api/profile')
  .then(res => {
    console.log(res)
  })
})

'use strict'

app.controller('FillCtrl', function($scope, $http, $location) {
  $http
  .get('/api/fillOut')
  .then(res => {
    console.log(res)
  })
})

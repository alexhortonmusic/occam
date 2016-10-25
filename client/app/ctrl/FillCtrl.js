'use strict'

app.controller('FillCtrl', function($scope, $http, $location) {
  let userEmail

  $http
  .get('/api/fillOut')
  .then(res => {
    console.log(res.data.email)
    userEmail = res.data.email
  })


  $scope.newUserInfo = () => {
    let userInfo = {
      email: userEmail,
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      bio: $scope.bio,
      linkedIn: $scope.linkedIn,
      gitHub: $scope.gitHub,
      personalSite: $scope.personalSite
    }

    $http
    .post('/api/fillOut', userInfo)
    .then(res => {
      console.log(res)
    })

  }
})

'use strict'

app.controller('FillCtrl', function($scope, $http, $location) {
  // let userEmail

  $http
  .get('/api/fillOut')
  .then(res => {
    console.log(res)
    // userEmail = res.data.email
    // console.log('userEmail', userEmail)
  })


  $scope.newUserInfo = () => {
    let userInfo = {
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
      if (res.data === '') {
        console.log('FAIL')
      } else {
        $location.url('/profile')
      }
    })
  }
})

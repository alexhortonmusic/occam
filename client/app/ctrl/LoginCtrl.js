'use strict'

app.controller('LoginCtrl', function($scope, $http) {

  $scope.addUser = () => {
    let email = $scope.regEmail
    let password = $scope.regPassword
    let confirmation = $scope.passwordConfirmation

    if (password === confirmation) {
      $http
      .post('/api/register', { email, password })
      .then(res => {
          console.log(res)
          // $location.url('/profile')
          let email = res.data.email
          let password = res.data.password
          $http.post('/api/login', { email, password })
          .then(() => console.log('It worked'))
        })
        // .then(res => {
        //   console.log(res)
        //
        // })
    } else {
      $scope.showMessage = true
      $scope.msg = 'Passwords must match.'
      $scope.regPassword = ''
      $scope.passwordConfirmation = ''
    }
  }

  $scope.login = () => {
    let email = $scope.email
    let password = $scope.password

    $http
    .post('/api/login', { email, password })
    .then(res => {
      console.log(res)
    })
  }
})

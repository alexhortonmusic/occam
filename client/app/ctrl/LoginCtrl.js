'use strict'

app.controller('LoginCtrl', function($scope, $http, $location) {

  $scope.addUser = () => {
    let email = $scope.regEmail
    let password = $scope.regPassword
    let confirmation = $scope.passwordConfirmation

    if (password === confirmation) {
      $http
      .post('/api/register', { email, password })
      .then(res => {
          console.log(res)
          let email = res.data.email
          let password = res.data.password
          $http.post('/api/login', { email, password })
          .then(() => $location.url('/fillOut'))
        })
    } else {
      $scope.regMessage = true
      $scope.regMsg = 'Passwords must match.'
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
      if (res.data === 'Email or password is incorrect') {
        $scope.logMessage = true
        $scope.logMsg = res.data
        $scope.email = ''
        $scope.password = ''
        console.log(res.data)
      } else {
        console.log(res)
        $location.url('/boards')
      }
    })
  }
})

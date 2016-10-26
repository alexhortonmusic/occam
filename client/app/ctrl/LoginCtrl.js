'use strict'

app.controller('LoginCtrl', function($scope, $http, $location) {

  $http
  .get('/api/register')
  .then(res => {
    if (res.data !== 'please sign in') {
      $location.url('/profile')
    }
  })

  $http
  .get('/api/login')
  .then(res => {
    if (res.data !== '') {
      $location.url('/profile')
    }
  })

  $scope.addUser = () => {
    let email = $scope.regEmail
    let password = $scope.regPassword
    let confirmation = $scope.passwordConfirmation

    if (password === confirmation) {
      $http
      .post('/api/register', { email, password })
      .then(res => {
        if (res.data.msg === 'User already exists!') {
          $scope.regMessage = true
          $scope.regMsg = 'Account exists'
        } else {
          let email = res.data.email
          let password = res.data.password
          $http.post('/api/login', { email, password })
          .then(() => $location.url('/fillOut'))
        }
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
        $location.url('/profile')
      }
    })
  }
})

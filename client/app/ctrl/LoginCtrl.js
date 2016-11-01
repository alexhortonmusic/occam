'use strict'

app.controller('LoginCtrl', function($scope, $http, $location) {

  $http
  .get('/api/login')
  .then(res => {
    console.log(res)
    // if (res.data !== '') {
    //   $location.url('/profile')
    // }
  })

  $scope.addUser = () => {
    let email = $scope.regEmail
    let password = $scope.regPassword
    let confirmation = $scope.passwordConfirmation

    if (password === confirmation) {
      // LoginFactory.createUser(email, password)
      // .then(res => {
      //   console.log(res)
      // })
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
      if (res.data.msg === 'Email or password is incorrect' || res.data.msg === 'Account does not exist') {
        $scope.logMessage = true
        $scope.logMsg = res.data.msg
        $scope.email = ''
        $scope.password = ''
      } else {
        console.log("sign in res", res)
        let userId = res.data._id
        $location.url('/profile/' + userId)
      }
    })
  }
})

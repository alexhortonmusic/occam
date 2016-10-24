'use strict'

app.controller('LoginCtrl', function($scope, $http) {

    $http.get('/api/login')
      .then(res => {
        $scope.title = res.data.title
      })

    $scope.addUser = () => {
      let email = $scope.email
      let password = $scope.password
      let confirmation = $scope.passwordConfirmation

      $http
      .post('/api/login', { email, password, confirmation })
      .then(res => {
        let msg = res.data.msg
        if (msg) {
          
        }
      })
    }

  })

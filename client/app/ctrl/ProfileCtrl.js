'use strict'

app.controller('ProfileCtrl', function($scope, $http, $location, $routeParams) {

  // gets existing boards
  $http
  .get('/api/profile/' + $routeParams.id)
  .then(res => {
    $scope.boards = res.data
  })

  $scope.createBoard = () => {
    let boardBody = {
      boardName: $scope.boardName,
      boardOwnerId: $routeParams.id,
      members: []
    }

    $http
    .post('/api/profile/' + $routeParams.id, boardBody)
    .then(res => {
      console.log(res)
    })
  }


})

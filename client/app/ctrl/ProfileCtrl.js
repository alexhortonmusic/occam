'use strict'

app.controller('ProfileCtrl', function($scope, $http, $location, $routeParams) {

  let userId = $routeParams.id

  // gets existing boards
  $http
  .get('/api/profile/' + userId)
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
    .post('/api/profile/' + userId, boardBody)
    .then(res => {
      console.log(res)
    })
  }

  $scope.deleteBoard = (boardId) => {
    console.log(boardId)
    $http
    .delete('/api/profile/' + boardId)
    .then(res => {
      console.log(res)
    })
  }


})

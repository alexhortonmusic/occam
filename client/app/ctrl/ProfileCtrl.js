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
    // let boardBody = {
    //   boardName: $scope.boardName,
    //   boardOwnerId: $routeParams.id,
    //   members: []
    // }

    let boardBody = {
      boardName: $scope.boardName,
      boardOwnerId: userId,
      members: [
        userId
      ],
      tasks: [
        {
          name: 'Backlog',
          tasks: [
            'try hard',
            'work hard'
          ]
        }
      ]
    }

    $http
    .post('/api/profile/' + userId, boardBody)
    .then(res => {
      console.log(res)
    })
  }

  $scope.showEdit = []

  $scope.showEditBox = (index) => {
    $scope.showEdit[index] = true
    console.log($scope.showEdit)
  }

  $scope.boardNameUpdate = []

  $scope.editBoard = (index, boardId) => {
    let newName = {
      boardName: $scope.boardNameUpdate[index]
    }

    console.log(newName)

    $http
    .put('/api/profile/' + boardId, newName)
    .then(updatedBoard => {
      console.log(updatedBoard)
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

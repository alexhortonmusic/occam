'use strict'

app.controller('BoardCtrl', function($scope, $http, $location, $routeParams) {

  const boardId = $routeParams.boardId

  // gets current board
  $http
  .get('/api/board/' + boardId)
  .then(res => {
    $scope.boardName = res.data.boardName
    $scope.boardLists = res.data.lists
  })

  $scope.newList = () => {
    let listName = $scope.listName
    console.log(listName)

    $http
    .patch('/api/board/' + boardId, { name: listName })
    .then(res => {
      console.log(res.data)
    })
  }

  $scope.taskName = []

  $scope.newTask = (index, list) => {
    let taskName = $scope.taskName[index]
    let listId = list._id

    console.log(listId)

    $http
    .put('/api/board/' + boardId + '/' + listId, { taskName })
    .then( res => {
      console.log(res.data)
    })
  }
})

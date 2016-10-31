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

  $scope.deleteList = (list) => {
    console.log(list)
    let listId = list._id

    $http
    .delete('/api/board/' + boardId + '/' + listId)
    .then(res => {
      console.log(res)
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

  $scope.deleteTask = (task, list) => {
    console.log(task)
    console.log(list)
    let listId = list._id

    $http
    .delete('/api/board/' + boardId + '/' + listId + '/' + task)
    .then(res => {
      console.log(res)
    })
  }
})

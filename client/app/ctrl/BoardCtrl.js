'use strict'

app.controller('BoardCtrl', function($scope, $http, $location, $routeParams) {

  const boardId = $routeParams.boardId

  // gets current board
  $http
  .get('/api/board/' + boardId)
  .then(res => {
    $scope.boardName = res.data.boardName
    $scope.boardLists = res.data.tasks
  })

  $scope.newList = () => {
    let listName = $scope.listName
    console.log(listName)

    $http
    .put('/api/board/' + boardId, { name: listName })
    .then(res => {
      console.log(res.data)
    })
  }

  $scope.taskName = []

  $scope.newTask = (index, listName) => {
    console.log(listName)
    let taskName = $scope.taskName[index]
    console.log(taskName)
    let newTask = {
      name: listName,
      tasks: [
        taskName
      ]
    }

    $http
    .patch('/api/board/' + boardId, newTask)
    .then( res => {
      console.log(res)
    })
  }
})

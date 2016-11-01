'use strict'

app.controller('BoardCtrl', function($scope, $http, $location, $routeParams) {

  const boardId = $routeParams.boardId

  // gets current board
  const getBoards = () => {
    $http
    .get('/api/board/' + boardId)
    .then(res => {
      $scope.boardName = res.data.boardName
      $scope.boardLists = res.data.lists
    })
  }

  getBoards()

  $scope.newList = () => {
    let listName = $scope.listName

    $http
    .patch('/api/board/' + boardId, { name: listName })
    .then(res => {
      // console.log(res.data)
    })
    $scope.listName = ''

    getBoards()
  }

  $scope.deleteList = (list) => {
    console.log(list)
    let listId = list._id

    $http
    .delete('/api/board/' + boardId + '/' + listId)
    .then(res => {
      // console.log(res)
    })
    getBoards()
  }


  $scope.taskName = []

  $scope.newTask = (index, list) => {
    let taskName = $scope.taskName[index]
    let listId = list._id

    $http
    .patch('/api/board/' + boardId + '/' + listId, { taskName })
    .then( res => {
      // console.log(res.data)
    })
    $scope.taskName[index] = ''
    getBoards()
  }

  $scope.deleteTask = (task, list) => {
    let listId = list._id

    $http
    .delete('/api/board/' + boardId + '/' + listId + '/' + task)
    .then(res => {
      // console.log(res)
    })
    getBoards()
  }

  // array used to manipulate dynamically created models with booleans
  $scope.showEditBoxList = []
  $scope.listEdit = []

  $scope.showEditList = (index) => {
    $scope.showEditBoxList[index] = true
  }

  $scope.editList = (index, listId) => {
    let newTitle = $scope.listEdit[index]

    $http
    .put(`/api/board/${boardId}/${listId}`, { newTitle })
    .then(res => {
      // console.log(res)
    })

    $scope.showEditBoxList[index] = false
    $scope.listEdit[index] = ''
    getBoards()
  }

  $scope.selectedTask = []

  $scope.taskToMove = (index, task, e) => {
    $('.task').removeClass('selectedTask')
    let test = $(e.target)
    test.toggleClass('selectedTask')
    // console.log(index, task)
  }
})

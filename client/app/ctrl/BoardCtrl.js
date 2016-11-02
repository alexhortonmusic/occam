'use strict'

app.controller('BoardCtrl', function($scope, $http, $location, $routeParams) {

  const boardId = $routeParams.boardId

  // gets current board
  const getBoard = () => {
    $http
    .get('/api/board/' + boardId)
    .then(res => {
      // let userId = res.data.boardOwnerId
      $scope.boardName = res.data.boardName
      $scope.boardLists = res.data.lists

      $http
      .get('/api/login')
      .then(res => {
        console.log(res)
        $scope.user = res.data
      })
    })
  }

  getBoard()

  $scope.newList = () => {
    let listName = $scope.listName

    $http
    .patch('/api/board/' + boardId, { name: listName })
    .then(res => {
      // console.log(res.data)
    })
    $scope.listName = ''

    getBoard()
  }

  $scope.deleteList = (list) => {
    console.log(list)
    let listId = list._id

    $http
    .delete('/api/board/' + boardId + '/' + listId)
    .then(res => {
      // console.log(res)
    })
    getBoard()
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
    getBoard()
  }

  $scope.deleteTask = (taskName, list) => {
    console.log(taskName)
    let listId = list._id

    $http
    .delete('/api/board/' + boardId + '/' + listId + '/' + taskName)
    .then(res => {
      // console.log(res)
    })
    getBoard()
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
    getBoard()
  }

  $scope.selectedTask = []

  let taskName
  let oldList
  $scope.taskToMove = (list, task, e) => {
    $('.task').removeClass('selectedTask')
    let test = $(e.target)
    test.addClass('selectedTask')
    taskName = task
    oldList = list
  }

  $scope.taskToNewBoard = (newList) => {
    if (!taskName) {
      console.log('Select a task to move!')
    } else {
      let oldListId = oldList._id
      let listId = newList._id

      // deletes task from current list
      $http
      .delete('/api/board/' + boardId + '/' + oldListId + '/' + taskName)
      .then(res => {
        // console.log(res.data)
      })

      // adds task to new list
      $http
      .patch('/api/board/' + boardId + '/' + listId, { taskName })
      .then( res => {
        // console.log(res.data)
      })
      getBoard()
    }

  }
})

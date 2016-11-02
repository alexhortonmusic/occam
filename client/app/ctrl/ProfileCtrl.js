'use strict'

app.controller('ProfileCtrl', function($scope, $http, $location, $routeParams) {

  let userId = $routeParams.id

  const getUser = () => {
    $http
    .get(`/api/${userId}/`)
    .then(res => {
      console.log(res.data)
      $scope.firstName = res.data.firstName
      $scope.lastName = res.data.lastName
      $scope.bio = res.data.bio
      $scope.gitHub = res.data.gitHub
      $scope.linkedIn = res.data.linkedIn
      $scope.personalSite = res.data.personalSite
    })
  }

  getUser()

  // gets existing boards
  const getBoards = () => {
    $http
    .get('/api/profile/' + userId)
    .then(res => {
      // console.log(res)
      $scope.boards = res.data
    })
  }

  getBoards()

  $scope.createBoard = () => {

    let boardBody = {
      boardName: $scope.boardName,
      boardOwnerId: userId,
      members: [
        userId
      ],
      tasks: []
    }
    // in 'tasks' array, add objects as { name: '', tasks: ['stuff', 'other stuff']}

    $http
    .post('/api/profile/' + userId, boardBody)
    .then(res => {
      console.log(res)
    })

    $scope.boardName = ''

    getBoards()
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
    getBoards()
  }

  $scope.deleteBoard = (boardId) => {
    console.log(boardId)
    $http
    .delete('/api/profile/' + boardId)
    .then(res => {
      console.log(res)
    })
    getBoards()
  }


})

'use strict'

app.controller('BoardCtrl', function ($scope, $http, $routeParams, $location) {

  const boardId = $routeParams.boardId

  $http
  .get('/api/board/' + boardId)
  .then(boardInfo => {
    console.log(boardInfo)
  })

  // $scope.addNewTask = () => {
  //   let
  // }
})

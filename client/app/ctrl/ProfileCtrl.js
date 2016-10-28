'use strict'

app.controller('ProfileCtrl', function($scope, $http, $location, $routeParams) {

  // gets existing boards
  $http
  .get('/api/profile/' + $routeParams.id)
  .then(res => {
    console.log(res)
  })

  $createBoard = () => {
    let boardBody = {
      boardName: $scope.boardName,
      boardOwnerId: $scope.ownerId
    }

    $http
    .post('/api/profile/' + $routeParams.id, boardBody)
  }


})

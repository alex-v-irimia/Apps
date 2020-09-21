app.controller('homeCtrl',['$scope','$http',function($scope,$http){
  $http.get("/data/apps.json").then(function(response){
    $scope.apps=response.data;
  },function(response){
    $scope.apps=[{name:"Error",href:"#"}];
  });
}]);

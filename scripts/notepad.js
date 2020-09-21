app.controller('notepadCtrl',['$scope','$http',function($scope,$http){
  $scope.font_size=30;
  $http.get('/data/fonts.json').then(function(response){
    $scope.fonts=response.data;
  },function(response){
    $scope.fonts=[{value:"Arial, Helvetica, sans-serif",name:"Arial"}];
  });
}]);

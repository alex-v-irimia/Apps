app.controller('shopCtrl',['$scope',function($scope){
  $scope.addItem=function(){
    if($scope.items.indexOf($scope.newItem)!=-1){
      $scope.duplicate=true;
    }
    else{
      $scope.duplicate=false;
      $scope.items.push($scope.newItem);
    }
    $scope.newItem='';
    $scope.add.toAdd.$setUntouched();
  };

  $scope.removeAll=function(){
    $scope.items=[];
    $scope.add.toAdd.$setUntouched();
  }

  $scope.removeItem=function(item){
    var index=$scope.items.indexOf(item);
    $scope.items.splice(index,1);
    $scope.add.toAdd.$setUntouched();
  }

  $scope.duplicate=false;
  $scope.items=[];
}]);

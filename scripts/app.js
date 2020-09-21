var app=angular.module("app",["ngRoute","ngAnimate"]);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when('/home',{
    templateUrl:'/views/home.html',
    controller:'homeCtrl'
  }).when('/notepad',{
    templateUrl:'/views/notepad.html',
    controller:'notepadCtrl'
  }).when('/about',{
    templateUrl:'/views/about.html'
  }).when('/contact',{
    templateUrl:'/views/contact.html'
  }).when('/shoplist',{
    templateUrl:'/views/shoplist.html',
    controller:'shopCtrl'
  }).otherwise({
    redirectTo:'/home'
  });
}]);

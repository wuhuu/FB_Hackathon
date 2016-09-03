angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
    $scope.login = function(username, pwd) {
        if(username == "Ben") {
            $state.go('tab'); 
        }
        
    }
})

.controller('DealsCtrl', function($scope,Deals) {
  $scope.deals = Deals.all();
  $scope.remove = function(deal) {
    Deals.remove(deal);
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('DealDetailCtrl', function($scope, $stateParams,$location, Deals, Chats) {
  $scope.deal = Deals.get($stateParams.dealId);
  $scope.add = function(dealId) {
    var chatId = Deals.add(dealId);
    $location.path('/tab/chats/'+chatId);
  }
})

.controller('ProfileCtrl', function($scope, $stateParams, Profile) {
  $scope.profile = Profile.get("Ben");
})

.controller('NewDealCtrl', function($scope, Deals) {
  $scope.newDeal = function(deal) {

  }
});

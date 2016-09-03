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

.controller('ChatDetailCtrl', function($scope, $stateParams,$location, Chats, Profile) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.msges = $scope.chat.msgs;
  $scope.profile = [];
  $scope.msges.forEach(function(element) {
    if(!(element.profileid in $scope.profile)) {
      var key = element.profileid;
      var object = Profile.getUsingId(element.profileid);
      $scope.profile[key] = object;
    }
  }, this);

  $scope.contact = function(chatId){
    $location.path('/tab/contact/'+chatId);
  }

})

.controller('DealDetailCtrl', function($scope, $stateParams,$location, Deals, Chats) {
  $scope.deal = Deals.get($stateParams.dealId);
  $scope.num = 1;

  $scope.order = function(dealId) {
    var chatId = Deals.order(dealId,$scope.num);
    $location.path('/tab/chats');
  }

  $scope.plus = function(){
     $scope.num++;
  }

  $scope.minus = function(){
    if($scope.num!=1)
     $scope.num--;
  }

})

.controller('ProfileCtrl', function($scope, $stateParams, Profile) {
  $scope.profile = Profile.get("Ben");
})

.controller('NewDealCtrl', function($scope, $location, Deals) {
    
    $scope.takePicture = function() {
        $scope.img = true;
        $scope.imgURL = "img/newDeal.jpg";
        $scope.dealName = "C-Rest"
        $scope.oriPrice = "$ 59";
        $scope.disPrice = "$ 49";
        $scope.slot = 1;
        $scope.loc = "City square plaza lvl3 03-42";
    }
 
    
    $scope.addDeal = function(dealName, oriPrice, disPrice, slot, loc) {

        Deals.newDeal($scope.imgURL, dealName, 59, 49, slot, loc);
        
        $scope.img = false;
        $scope.dealName = "";
        $scope.oriPrice = "";
        $scope.disPrice = "";
        $scope.slot = "";
        $scope.loc = "";
        $location.path('/tab/deals');


  }
})

.controller('ContactCtrl', function($scope,$stateParams, Chats,Profile) {  
  $scope.members = Chats.get($stateParams.chatId).members;
  $scope.profiles = [];
  $scope.members.forEach(function(element) {
    $scope.profiles.push(Profile.getUsingId(element));
  }, this);

});

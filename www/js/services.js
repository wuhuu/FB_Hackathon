angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'C-Rest',
    lastText: 'You on your way?',
    face: 'img/newDeal.jpg',
    msgs:[
      {
        profileid:0,
        msg:"are you on the your way?"
      },
      {
        profileid:1,
        msg:"yes!"
      },
      {
        profileid:0,
        msg:"alright,cya!"
      }
    ],
    members:[0,1]
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Profile', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var profiles = [{
    id: 0,
    name: 'Ben',
    number: '+65 96222890',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max',
    number: '+65 9652890',
    face: 'img/max.png'
  }];

  return {
    all: function() {
      return profiles;
    },
    get: function(name) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].name === name) {
          return profiles[i];
        }
      }
      return null;
    },
    getUsingId: function(id) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id === id) {
          return profiles[i];
        }
      }
      return null;
    }
  };
})

.factory('Deals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var deals = [{
    id: 0,
    dealName: 'Ben & Jerry promotion',
    discount: "20 %",
    origin:"$40.99",
    discounted: "$31.11",
    numNeed: 1,
    location: 'Somerset 313, Random shop',
    dealPic: 'img/bnj.jpg',
    chatId:0
  }, {
    id: 1,
    dealName: 'Fidget Cube discount',
    discount: "90 %",
    origin:"$59.99",
    discounted: "$19.99",
    numNeed: 1,
    location: 'Somerset 313, Random shop',
    dealPic: 'img/fidget.jpg',
    chatId:1
  }];

  return {
    all: function() {
      return deals;
    },
    remove: function(deal) {
      deals.splice(deals.indexOf(deal), 1);
    },
    get: function(dealId) {
      for (var i = 0; i < deals.length; i++) {
        if (deals[i].id === parseInt(dealId)) {
          return deals[i];
        }
      }
      return null;
    },
    order: function(dealId,num) {
      for (var i = 0; i < deals.length; i++) {
        if (deals[i].id === parseInt(dealId)) {
           deals[i].numNeed -= num;
           return deals[i].chatId;
        }
      }
      return null;
    },
    newDeal: function(imgURL, dealName, oriPrice, disPrice, slot, loc) {
       var id = deals.length;
       var discount = ((oriPrice - disPrice)  * 100 )/ oriPrice;
       deals.push({
        id: id,
        dealName: dealName,
        discount: discount.toFixed(0) + " %",
        origin:"$" + oriPrice,
        discounted: "$" + disPrice,
        numNeed: slot,
        location: loc,
        dealPic: imgURL,
        chatId: id
      });
    }
  };
})

.factory('Camera', function($q) {

   return {
      getPicture: function(options) {
         var q = $q.defer();

         navigator.camera.getPicture(function(result) {
            q.resolve(result);
         }, function(err) {
            q.reject(err);
         }, options);

         return q.promise;
      }
   }

});

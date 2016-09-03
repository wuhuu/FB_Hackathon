angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
    }
  };
})

.factory('Deals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var deals = [{
    id: 0,
    dealName: 'Ben & Jerry Ice cream',
    discount: "20%",
    numNeed: 1,
    location: 'Somerset 313, Random shop',
    dealPic: 'img/ben.png',
    chatId:0
  }, {
    id: 1,
    dealName: 'Ben & Jerry Ice cream',
    discount: "20%",
    numNeed: 1,
    location: 'Somerset 313, Random shop',
    dealPic: 'img/ben.png',
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
    add: function(dealId) {
      for (var i = 0; i < deals.length; i++) {
        if (deals[i].id === parseInt(dealId)) {
           deals[i].numNeed -= 1;
           return deals[i].chatId;
        }
      }
      return null;
    },
    newDeal: function(Deal) {
      
    }
  };
});

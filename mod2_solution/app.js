( function () {
    'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService)
  {
    var toBuyCtrl = this;

    toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.getBuyItems();

    toBuyCtrl.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

    toBuyCtrl.isShoppingListEmpty = function () {
      return toBuyCtrl.itemsToBuy.length === 0;
    }

  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBoughtCtrl = this;

    alreadyBoughtCtrl.itemsBought = ShoppingListCheckOffService.getBoughtItems();

    alreadyBoughtCtrl.isShoppingListEmpty = function () {
      return alreadyBoughtCtrl.itemsBought.length === 0;
    }

  }

  function ShoppingListCheckOffService(){

    var service = this;

    service.itemsToBuy = [
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 10 },
      { name: "Kachori", quantity: 10 },
      { name: "samosa", quantity: 10 },
      { name: "dhokla", quantity: 10 }
    ];
    service.itemsBought = [];


    service.buyItem = function (itemIndex) {
      var item = {
        name: service.itemsToBuy[itemIndex].name,
        quantity: service.itemsToBuy[itemIndex].quantity
      }
      service.itemsToBuy.splice(itemIndex,1);
      service.itemsBought.push(item);
    }

    service.getBuyItems = function () {
      return service.itemsToBuy;
    }

    service.getBoughtItems = function () {
      return service.itemsBought;
    }

  }


})();

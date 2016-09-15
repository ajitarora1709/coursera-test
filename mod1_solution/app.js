(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchString = "";
      $scope.messageDisplay = "";

      $scope.checkTooMuch = function() {
        // Handling of click of check too much button.
        var lunchItems = $scope.lunchString.split(',');

        if (lunchItems.length === 1 && lunchItems[0] === "")
        {
          $scope.messageDisplay = "Please enter data first";
        }
        else if (lunchItems.length <= 3) {
          $scope.messageDisplay = "Enjoy!";
        }
        else {
          $scope.messageDisplay = "Too much!";
        }


      };

    }
})();

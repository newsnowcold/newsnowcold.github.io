(function(angular){
'use strict';

    angular
        .module('bottomSheetNavigation')
        .factory('bottomSheetNavigationService',['$timeout', 
                                                 '$mdBottomSheet', 
                                                 '$mdToast',
                                                 '$q', 
                                                 function ($timeout, 
                                                           $mdBottomSheet, 
                                                           $mdToast,
                                                           $q) {
            var showNavigation = function () {
                var dfd = $q.defer();

                $mdBottomSheet
                    .show({
                        templateUrl: 'app/component/bottomSheetNavigation/templates/bottom-sheet-grid-template.html',
                        controller: 'bottomSheetNavigationCtrl',
                        clickOutsideToClose: true
                    }).then(function(clickedItem) {
                        dfd.resolve(clickedItem);
                    });

                return dfd.promise
            }

           return {
                showNavigation: showNavigation
           }

        }])    
})(angular)
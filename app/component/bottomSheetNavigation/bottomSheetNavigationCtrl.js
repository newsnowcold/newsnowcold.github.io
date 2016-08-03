(function(angular){
'use strict';

    angular
        .module('bottomSheetNavigation')
        .controller('bottomSheetNavigationCtrl',['$scope', 
                                                 '$mdBottomSheet', 
                                                 function ($scope, 
                                                           $mdBottomSheet) {

            $scope.header = 'Access any information about me!';

            $scope.navItems = [
                {
                    icon: "face",
                    name: "About",
                    route: "/about"
                },
                {
                    icon: "contact_mail",
                    name: "Contact Info",
                    route: "/contact"
                },
                {
                    icon: "highlight",
                    name: "Portfolio",
                    route: "/portfolio"
                },
                {
                    icon: "developer_board",
                    name: "Skills",
                    route: "/skills"
                }
            ]

            $scope.listItemClick = function($index) {
                var clickedItem = $scope.navItems[$index];
                    $mdBottomSheet.hide(clickedItem);
            };

        }])    
})(angular)
(function (angular) {
    'use strict';

    angular.module('app', [
        'ngMaterial',
        'ngMdIcons',
        'bottomSheetNavigation',
        'homeModule',
        'aboutModule',
        'contactModule',
        'portfolioModule',
        'skillsModule',
        'magnifyImage'
        ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }])

    .filter('trustUrl', ['$sce', function ($sce) {
        return $sce.trustAsResourceUrl(url);
    }])

    .controller('appCtrl',
        ['$scope',
         '$window',
         '$location',
         'bottomSheetNavigationService',
         function ($scope,
                   $window,
                   $location,
                   bottomSheetNavigationService) {

        $scope.showGridBottomSheet = function() {
            bottomSheetNavigationService
                .showNavigation()
                .then(function (data) {
                    $location.path(data.route);
                })

           
        };
    }])

})(angular);

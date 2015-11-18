(function (angular) {
    'use strict';

    angular.module('app', [
        'ngMaterial',
        'ngMdIcons'
    ])
    
    .filter('trustUrl', ['$sce', function ($sce) {
        return $sce.trustAsResourceUrl(url);
    }])

    .controller('appCtrl', 
                ['$scope', 
                 'DataService',
                 function ($scope,
                           DataService) {
        var getPortfolio = function () {

                DataService
                    .getPortfolio()
                    .then(function (data) {
                        $scope.portfolio = data;
                    })
                    .catch(function (err) {
                        alert(err);
                    });
            },
            getSkills = function () {
                DataService
                    .getSkills()
                    .then(function (data) {
                        console.log(data)
                        $scope.skills = data;
                    })
                    .catch(function (err) {
                        alert(err);
                    });
            };

        $scope.viewportWidth = $(window).width();
        $scope.viewportHeight = $(window).height();
        $scope.portfolio = null;
        $scope.skills = null;

        //fetch portfolios
        getPortfolio();
        getSkills();
        
    }])

})(angular);

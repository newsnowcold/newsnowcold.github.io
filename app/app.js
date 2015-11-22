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
                 '$window',
                 'DataService',
                 function ($scope,
                           $window,
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
                        $scope.skills = data;
                    })
                    .catch(function (err) {
                        alert(err);
                    });
            },
            getNumber = function (num) {
                return new Array(num);
            },
            gotoSite = function (site) {
                if (!site) { return; }

                var url = '';

                if (site == 'facebook') {
                    url = 'https://www.facebook.com/newsnowcold';
                } else if (site == 'linkedin') {
                    url = 'https://www.linkedin.com/in/darrelabello';
                } else if (site == 'github') {
                    url = 'https://github.com/newsnowcold';
                };

                $window.open(url);
            };


        $scope.viewportWidth = $(window).width();
        $scope.viewportHeight = $(window).height();
        $scope.getNumber = getNumber;
        $scope.portfolio = null;
        $scope.skills = null;
        $scope.gotoSite = gotoSite;

        //fetch portfolios
        getPortfolio();
        getSkills();
        
    }])

})(angular);

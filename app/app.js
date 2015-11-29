(function (angular) {
    'use strict';

    angular.module('app', [
        'ngMaterial',
        'ngMdIcons'
        ])

    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode(true);
    }])

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

                $window.open(site);
            },
            onMouseOver = function (index) {
                var target = '#portfolio_' + index;

                $(target).find('footer').css('height', '100%');
                $(target).find('.description').css('display', 'block');
            },
            onMouseLeave = function (index) {
                var target = '#portfolio_' + index;

                $(target).find('.description').css('display', '');
                $(target).find('footer').css('height', '50px');
            };


            $scope.viewportWidth = $(window).width();
            $scope.viewportHeight = $(window).height();
            $scope.getNumber = getNumber;
            $scope.portfolio = null;
            $scope.skills = null;
            $scope.gotoSite = gotoSite;
            $scope.onMouseOver = onMouseOver;
            $scope.onMouseLeave = onMouseLeave;

            //fetch portfolios
            getPortfolio();
            getSkills();
    }])
})(angular);

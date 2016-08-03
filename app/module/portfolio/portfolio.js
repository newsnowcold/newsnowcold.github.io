(function (angular) {
'use strict';

    angular
        .module('portfolioModule', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/portfolio', {
                    templateUrl: 'app/module/portfolio/template/portfolio.html',
                    controller: 'portfolioCtrl'
                });
        }])

})(angular)
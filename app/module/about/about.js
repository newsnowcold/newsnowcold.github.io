(function (angular) {
'use strict';

    angular
        .module('aboutModule', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/about', {
                    templateUrl: 'app/module/about/template/about.html',
                    controller: 'aboutCtrl'
                });
        }])

})(angular)
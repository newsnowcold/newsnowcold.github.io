(function (angular) {
    'use strict';

    angular
        .module('homeModule', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'app/module/home/template/home.html',
                    controller: 'homeCtrl'
                })

        }]);

})(angular)
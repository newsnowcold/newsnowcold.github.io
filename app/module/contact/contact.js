(function (angular) {
'use strict';

    angular
        .module('contactModule', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/contact', {
                    templateUrl: 'app/module/contact/template/contact.html',
                    controller: 'contactCtrl'
                });
        }])

})(angular)
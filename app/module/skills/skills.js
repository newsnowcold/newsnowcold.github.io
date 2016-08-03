(function (angular) {
'use strict';

    angular
        .module('skillsModule', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/skills', {
                    templateUrl: 'app/module/skills/template/skills.html',
                    controller: 'skillsCtrl'
                });
        }])

})(angular)
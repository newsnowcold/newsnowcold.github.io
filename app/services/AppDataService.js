(function (angular) {
    'use strict';

    angular.module('app')

    .factory('DataService', ['$q', function ($q) {
        return {
            getPortfolio: function () {
                var dfd = $q.defer();

                if (window.portfolio) {
                    dfd.resolve(window.portfolio);
                }
                
                return dfd.promise;
            },
            getSkills: function () {
                var dfd = $q.defer();

                if (window.skills) {
                    dfd.resolve(window.skills);
                }

                return dfd.promise;
            }
        };
    }])

})(angular);

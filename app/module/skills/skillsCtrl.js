(function (angular) {
'use strict';

    angular
        .module('skillsModule')
        .controller('skillsCtrl', ['$scope', 
        						  function ($scope) {
        	$scope.message = "Hello about me!";
        }])

})(angular)
(function (angular) {
'use strict';

    angular
        .module('aboutModule')
        .controller('aboutCtrl', ['$scope', 
        						  function ($scope) {
        	$scope.message = "Hello about me!";
        }])

})(angular)
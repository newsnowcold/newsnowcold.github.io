(function (angular) {
'use strict';

    angular
        .module('portfolioModule')
        .controller('portfolioCtrl', ['$scope', 
        						  function ($scope) {
        	$scope.message = "Hello about me!";
        }])

})(angular)
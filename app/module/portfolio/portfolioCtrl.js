(function (angular) {
'use strict';

    angular
        .module('portfolioModule')
        .controller('portfolioCtrl', ['$scope', 
        						  function ($scope) {
        	$scope.message = "Hello about me!";

        	$scope.portfolios = window.portfolios;
        }])

})(angular)
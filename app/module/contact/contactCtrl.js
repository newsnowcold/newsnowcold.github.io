(function (angular) {
'use strict';

    angular
        .module('contactModule')
        .controller('contactCtrl', ['$scope', 
        						  function ($scope) {
        	$scope.message = "Hello about me!";
        }])

})(angular)
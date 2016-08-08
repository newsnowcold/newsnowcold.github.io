(function (angular) {
'use strict';

    angular
        .module('contactModule')
        .controller('contactCtrl', ['$scope', 
                                  function ($scope) {

            $scope.header = "Contact me";
            $scope.subHeader = "";

            $scope.socialSites = [
                {
                    "link": "https://www.linkedin.com/in/darrelabello",
                    "displayName": "Linkedin",
                    "displayIcon": "linkedin-box"
                },
                {
                    "link": "https://www.facebook.com/newsnowcold",
                    "displayName": "Facebook",
                    "displayIcon": "facebook-box"
                },
                {
                    "link": "https://plus.google.com/103685513246916786814/posts",
                    "displayName": "googlePlus",
                    "displayIcon": "google-plus-box"
                },
                {
                    "link": "",
                    "displayName": "Twitter",
                    "displayIcon": "twitter"
                },
                {
                    "link": "https://github.com/newsnowcold",
                    "displayName": "GitHub",
                    "displayIcon": "github-box"
                }
            ];            

        }])

})(angular)
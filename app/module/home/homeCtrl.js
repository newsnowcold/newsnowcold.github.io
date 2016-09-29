(function (angular) {
    'use strict';

    angular
        .module('homeModule')

        .controller('homeCtrl',['$scope',
                                 function ($scope) {
            
            var imageSrc1 = "app/module/home/template/images/avatar01.png",
                imageSrc2 = "app/module/home/template/images/avatar02.png";

            $scope.imgSrc = imageSrc1;

            var animationStarted = false;
            $scope.startAnimation = function (e) {

                if (!animationStarted) {
                    $scope.imgSrc = imageSrc2;
                  
                    setTimeout(function() {
                        $(e.currentTarget).css('background-position-y', 'top');


                        setTimeout(function () {                            
                            $('.container.home .avatar-container .tab-content-image .bendings').css('opacity', '1');
                            $('.container.home .avatar-container .tab-content-image .bending-ps').css('opacity', '1');
                        }, 4000)
                    }, 5000);

                    
                    animationStarted = true;
                }               
            }
            
        }])

})(angular)
(function (angular) {
'use strict';

	angular
		.module('magnifyImage', [])

		.factory('imageMagnifierService', ['$compile', '$rootScope', function ($compile, $rootScope) {
		    var body = document.getElementsByTagName('body'),
                directiveTagName = 'magnified-image-viewer';
            
		    return {
		        showMagnifiedImage: function (img) {
		            var newElem = document.createElement(directiveTagName),
                        scope = $rootScope.$new(true),
                        element = null;

		            newElem.setAttribute('image', img);
		            newElem.style.zIndex = "100";

		            element = $compile(newElem)(scope);

		            document.body.appendChild(element[0]);
		        },
		        removeMagnifiedImage: function () {
		            var list = document.getElementsByTagName(directiveTagName),
                        listLength = list.length;

		            for (var i = 0; i < listLength; i++) {
		                var child = list[i];
		                document.body.removeChild(child);
		            }
		        }
		    }
		}])
        // Main entry point of the directive
        // How to use: 
        // <div image-magnifier image="sourcehere.png"></div>
		.directive('imageMagnifier', ['imageMagnifierService', 
									  function (imageMagnifierService) {
			return {
				restrict: 'A',
				replace: false,
				transclude: true,
				template: '<div style="cursor: pointer;" ng-click="magnify()" ng-transclude></div>',
				scope: {
					image: '@'
				},
				link: function (scope, elem, attr) {
				    scope.magnify = function () {
				        imageMagnifierService.showMagnifiedImage(scope.image);
				    }
				}
			}

		}])

		.directive('magnifiedImageViewer', ['imageMagnifierService',
                                             function (imageMagnifierService) {
			return {
				restrict: 'E',
				replace: false,				
				scope: {
					image: '@'
				},
				templateUrl: "app/directive/magnifyImage/resources/templates/magnifiedImageViewer.html",
				link: function (scope, elem, attr) {
				    scope.close = function () {                       
				        imageMagnifierService.removeMagnifiedImage();
				    }
				}
			}
		}]);

})(angular);
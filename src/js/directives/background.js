'use strict';

var DEPENDENCIES = ['$window', 'Background', 'Card'];

function background($window, Background, Card) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'dist/partials/background.html',
        link: function(scope, element) {
            $($window).on('resize', render);
            render();

            function render() {
                var windowHeight = $($window).height();
                var windowWidth = $($window).width();
                var windowAspect = windowHeight / windowWidth;

                // TODO: Pick image based on aspect ratio
                Background.currentImage = Background.IMAGES[0];
                var imageAspect = (
                    Background.currentImage.height /
                    Background.currentImage.width
                );

                if (windowAspect > imageAspect) {
                    Background.height = windowHeight;
                    Background.width  = windowHeight / imageAspect;
                    Background.left   = windowWidth / 2 - Background.width / 2;
                    Background.top    = 0;
                }
                else {
                    Background.height = windowWidth * imageAspect;
                    Background.width  = windowWidth;
                    Background.left   = 0;
                    Background.top    = windowHeight / 2 - Background.height / 2;
                }

                element.css(Background.toCSS());
            }
        }
    };
}

background.$inject = DEPENDENCIES;

angular.module('wedding').directive('background', background);

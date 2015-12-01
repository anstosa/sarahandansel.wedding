'use strict';

var DEPENDENCIES = ['$window', 'Background', 'Card'];

function background($window, Background, Card) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'dist/partials/background.html',
        link: function(scope, element) {
            $($window).on('resize', render);
            $(render);

            function render() {
                var windowHeight = $($window).height();
                var windowWidth = $($window).width();
                var windowAspect = windowHeight / windowWidth;
                var scale;

                if (windowAspect > Background.IMAGE.aspect) {
                    Background.height = windowHeight;
                    scale             = windowHeight / Background.IMAGE.height;
                    Background.width  = windowHeight / Background.IMAGE.aspect;
                    Background.left   = windowWidth / 2 - Background.width / 2;
                    Background.top    = 0;
                }
                else {
                    Background.height = windowWidth * Background.IMAGE.aspect;
                    Background.width  = windowWidth;
                    scale             = windowWidth / Background.IMAGE.width;
                    Background.left   = 0;
                    Background.top    = windowHeight / 2 - Background.height / 2;
                }

                var PADDING = 20;
                var rightEdge = (
                    Background.IMAGE.card.left +
                    Background.IMAGE.card.width +
                    Background.left / scale
                ) * scale + PADDING;
                if (rightEdge > windowWidth) {
                    Background.left -= rightEdge - windowWidth;
                }

                var bottomEdge = (
                    Background.IMAGE.card.top +
                    Background.IMAGE.card.height +
                    Background.top / scale
                ) * scale + PADDING;
                if (bottomEdge > windowHeight) {
                    Background.top -= bottomEdge - windowHeight;
                }

                requestAnimationFrame(function() {
                    element.css(Background.toCSS());
                    $($window.document.body).css({
                        height: windowHeight,
                        width: windowWidth,
                    });
                })
            }
        }
    };
}

background.$inject = DEPENDENCIES;

angular.module('wedding').directive('background', background);

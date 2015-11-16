'use strict';

var DEPENDENCIES = ['$window', 'Background', 'Card'];

function card($window, Background, Card) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'dist/partials/card.html',
        link: function(scope, element) {
            $($window).on('resize', render);
            render();

            $($window).on('click', function(event) {
                if (Card.isActive) {
                    Card.isActive = false
                    animate();
                    render();
                }
            });
            element.on('click', function(event) {
                if (!Card.isActive) {
                    Card.isActive = true
                    animate();
                    render();
                }
                event.stopPropagation();
            });

            function animate() {
                element.css('transition', 'all, 1s');
                setTimeout(function () {
                    element.css('transition', '');
                }, 1000);
            }

            function render() {
                var windowHeight = $($window).height();
                var windowWidth = $($window).width();

                if (Card.isActive) {
                    var windowAspect = (
                        windowHeight /
                        windowWidth
                    );
                    Card.isLandscape = (windowAspect <= 1);
                    if (Card.isLandscape) {
                        var cardAspect = (
                            Card.ACTIVATED.height /
                            Card.ACTIVATED.width
                        );
                    }
                    else {
                        var cardAspect = (
                            Card.ACTIVATED.width /
                            Card.ACTIVATED.height
                        );
                    }

                    if (windowAspect < cardAspect) {
                        Card.height = (
                            windowHeight -
                            Card.ACTIVATED.padding * 2
                        );
                        Card.width = Card.height / cardAspect;
                        Card.left = (
                            windowWidth / 2 -
                            Card.width / 2
                        );
                        Card.top = Card.ACTIVATED.padding;
                    }
                    else {
                        Card.width  = (
                            windowWidth -
                            Card.ACTIVATED.padding * 2
                        );
                        Card.height = Card.width * cardAspect;
                        Card.left = Card.ACTIVATED.padding;
                        Card.top = (
                            windowHeight / 2 -
                            Card.height / 2
                        );
                    }

                    if (!Card.isLandscape) {
                        var temp = Card.height;
                        Card.height = Card.width;
                        Card.width = temp;
                        Card.left -= (Card.width - Card.height) / 2;
                        Card.top -= (Card.height - Card.width) / 2;
                    }
                }
                else {
                    var scale = (
                        Background.currentImage.width /
                        Background.width
                    );

                    Card.height = Background.currentImage.card.height / scale;
                    Card.width  = Background.currentImage.card.width  / scale;
                    Card.left   = (
                        Background.currentImage.card.left / scale +
                        Background.left
                    );
                    Card.top    = (
                        Background.currentImage.card.top / scale +
                        Background.top
                    );
                }

                element.css(Card.toCSS());
            }
        }
    };
}

card.$inject = DEPENDENCIES;

angular.module('wedding').directive('card', card);

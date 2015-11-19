'use strict';

var DEPENDENCIES = ['$window', 'Background', 'Card'];

function card($window, Background, Card) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'dist/partials/card.html',
        link: function(scope, element) {
            var previousCard = Card;

            $($window).on('resize', function() {
                render();
            });
            render();

            $($window).on('click', function(event) {
                if (Card.isActive) {
                    setActive(false);
                }
            });
            element.on('click', function(event) {
                if (!Card.isActive) {
                    setActive(true);
                }
                event.stopPropagation();
            });

            function setActive(isActive) {
                if (typeof isActive === 'undefined') {
                    isActve = !Card.isActive;
                }
                render({isActive: isActive});
            }

            function animate() {
                element.css('transition', 'all, 1s');
                setTimeout(function () {
                    element.css('transition', '');
                }, 1000);
            }

            function render(cardData) {
                previousCard = angular.copy(Card);

                if (cardData) {
                    angular.extend(Card, cardData);
                }

                var windowHeight = $($window).height();
                var windowWidth = $($window).width();

                var windowAspect = (
                    windowHeight /
                    windowWidth
                );
                Card.isLandscape = (windowAspect <= 1);
                Card.scale = 1;
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

                if (!Card.isActive) {
                    var scale = (
                        Background.currentImage.width /
                        Background.width
                    );
                    var targetWidth = Background.currentImage.card.width  / scale;
                    Card.scale = targetWidth / Card.width;

                    var actualWidth = Card.width * Card.scale;
                    var actualHeight = Card.height * Card.scale;

                    Card.left = (
                        Background.currentImage.card.left / scale +
                        Background.left -
                        Card.width / 2 +
                        actualWidth / 2
                    );
                    Card.top = (
                        Background.currentImage.card.top / scale +
                        Background.top -
                        Card.height / 2 +
                        actualHeight / 2
                    );
                }

                if (Card.isActive !== previousCard.isActive) {
                    animate();
                }

                element.css(Card.toCSS());
            }
        }
    };
}

card.$inject = DEPENDENCIES;

angular.module('wedding').directive('card', card);

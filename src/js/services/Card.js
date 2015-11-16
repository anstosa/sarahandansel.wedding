'use strict';

var ACTIVATED = {
    height: 4,
    padding: 20,
    width: 6,
};

function CardFactory() {
    function Card() {
        this.ACTIVATED   = ACTIVATED;

        this.height      = null;
        this.isActive    = false;
        this.isLandscape = true;
        this.left        = null;
        this.top         = null;
        this.width       = null;
    }

    Card.prototype.toCSS = function () {
        var css = {
            height    : this.height,
            left      : this.left,
            top       : this.top,
            width     : this.width,
            transform : '',
        };

        if (this.isActive) {
            css.transform = 'rotateY(180deg)';

            if (!this.isLandscape) {
                css.transform += ' rotateZ(90deg)';
            }
        }

        return css;
    };

    return new Card();
}

angular.module('wedding').factory('Card', CardFactory);

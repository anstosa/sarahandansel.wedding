'use strict';

var ACTIVATED = {
    height: 1029,
    padding: 20,
    width: 1632,
};

ACTIVATED.aspect = ACTIVATED.height / ACTIVATED.width;

function CardFactory() {
    function Card() {
        this.ACTIVATED   = ACTIVATED;

        this.height      = null;
        this.isActive    = false;
        this.isLandscape = true;
        this.left        = null;
        this.top         = null;
        this.width       = null;
        this.scale       = null;
    }

    Card.prototype.toCSS = function () {
        var css = {
            height    : this.height,
            fontSize  : this.height / 20,
            left      : this.left,
            top       : this.top,
            width     : this.width,
            transform : 'translateZ(0) scale(' + this.scale + ')',
        };

        if (this.isActive) {
            css.transform += ' rotateY(180deg)';

            if (!this.isLandscape) {
                css.transform += ' rotateZ(90deg)';
            }
        }
        else {
            css.transform += ' rotateZ(4deg)';
        }

        return css;
    };

    return new Card();
}

angular.module('wedding').factory('Card', CardFactory);

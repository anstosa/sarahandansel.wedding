'use strict';

var IMAGES = [{
    url    : 'dist/img/background.jpg',
    height : 1694,
    width  : 2500,
    card   : {
        height : 391,
        left   : 1455,
        width  : 630,
        top    : 1040,
        rotate : 4,
    },
}];

function BackgroundFactory() {
    function Background() {
        this.IMAGES       = IMAGES;

        this.height       = null;
        this.currentImage = this.IMAGES[0];
        this.left         = null;
        this.top          = null;
        this.width        = null;
    }

    Background.prototype.toCSS = function () {
        return {
            backgroundImage : 'url(' + this.currentImage.url + ')',
            height          : this.height,
            left            : this.left,
            top             : this.top,
            width           : this.width,
        };
    };

    return new Background();
}

angular.module('wedding').factory('Background', BackgroundFactory);

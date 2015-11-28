'use strict';

var IMAGE = {
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
};

IMAGE.aspect = IMAGE.height / IMAGE.width;

function BackgroundFactory() {
    function Background() {
        this.IMAGE  = IMAGE;
        this.height = null;
        this.left   = null;
        this.top    = null;
        this.width  = null;
    }

    Background.prototype.toCSS = function () {
        return {
            backgroundImage : 'url(' + IMAGE.url + ')',
            height          : this.height,
            left            : this.left,
            top             : this.top,
            width           : this.width,
        };
    };

    return new Background();
}

angular.module('wedding').factory('Background', BackgroundFactory);

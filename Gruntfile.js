'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt);
    require('jit-grunt')(grunt, {
        fileblocks    : 'grunt-file-blocks',
        ngtemplates   : 'grunt-angular-templates',
        useminPrepare : 'grunt-usemin',
    });
};

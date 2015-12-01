'use strict';

module.exports = {
    favicon: {
        files: [{
            expand  : true,
            flatten : true,
            src     : 'src/favicon.ico',
            dest    : '.',
        }],
    },
    images: {
        files: [{
            expand  : true,
            flatten : true,
            src     : 'src/img/*',
            dest    : 'dist/img/',
        }],
    },
    fonts: {
        files: [{
            expand  : true,
            flatten : true,
            src     : 'src/font/*',
            dest    : 'dist/font/',
        }],
    },
};

'use strict';

module.exports = {
    index: {
        options: {
            pretty: true
        },
        files: {
            'index.html': 'src/index.jade'
        }
    },
    partials: {
        files: [{
            expand: true,
            flatten: true,
            src: 'src/partials/*',
            dest: 'dist/partials/',
            ext: '.html'
        }]
    }
};

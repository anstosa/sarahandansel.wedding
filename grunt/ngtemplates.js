'use strict';

module.exports = {
    compile: {
        src: 'dist/partials/*.html',
        dest: 'dist/js/templates.js',
        options: {
            htmlmin: {
                collapseBooleanAttributes     : false,
                collapseWhitespace            : true,
                removeAttributeQuotes         : false,
                removeComments                : true,
                removeEmptyAttributes         : false,
                removeRedundantAttributes     : false,
                removeScriptTypeAttributes    : false,
                removeStyleLinkTypeAttributes : false,
            },
            module: 'wedding',
        },
    },
};

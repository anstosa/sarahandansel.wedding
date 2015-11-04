'use strict';

module.exports = function () {
    return {
        default: [
            'dev',
            'watch',
        ],
        dev: [
            'concurrent:dev',
            'fileblocks',
        ],
        release: [
            'clean',
            'dev',
            'useminPrepare',
            'concat:generated',
            'cssmin:generated',
            'uglify:generated',
            'filerev',
            'usemin',
        ],
    };
};

module.exports = {
    index: {
        options: {
            removeAnchors: true,
        },
        src: 'index.html',
        blocks: {
            scripts: {
                src: [
                    'bower_components/jQuery/dist/jquery.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'src/js/app.js',
                    'dist/js/*',
                    'src/js/**/*.js',
                ],
            },
            styles: {
                src: [
                    'bower_components/normalize.css/normalize.css',
                    'dist/font/*.css',
                    'dist/css/*.css',
                ],
            },
        },
    },
};

module.exports = {
    index: {
        options: {
            removeAnchors: true
        },
        src: 'index.html',
        blocks: {
            scripts: {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-animate/angular-animate.js',
                    'src/js/app.js',
                    'dist/js/*',
                    'src/js/*'
                ]
            },
            styles: {
                src: [
                    'bower_components/normalize.css/normalize.css',
                    'dist/css/*'
                ]
            }
        }
    }
};

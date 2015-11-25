var DEPENDENCIES = ['$routeProvider'];

function Routes($routeProvider) {
    $routeProvider
        .when('/', {template: ''})
        .when('/about', {
            templateUrl : 'dist/partials/about.html',
        })
        .when('/accomodations', {
            templateUrl : 'dist/partials/accomodations.html',
        })
        .when('/party', {
            templateUrl : 'dist/partials/party.html',
        })
        .when('/story', {
            templateUrl : 'dist/partials/story.html',
        })
        .when('/tips', {
            templateUrl : 'dist/partials/tips.html',
        })
        .when('/wedding', {
            templateUrl : 'dist/partials/wedding.html',
        })
        .when('/welcome', {
            templateUrl : 'dist/partials/welcome.html',
        })
        .otherwise({redirectTo: '/'})
    ;
}

Routes.$inject = DEPENDENCIES;
angular.module('wedding').config(Routes);

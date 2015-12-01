var DEPENDENCIES = ['$routeProvider'];

function Routes($routeProvider) {
    $routeProvider
        .when('/', {template: ''})
        .when('/story', {
            templateUrl : 'dist/partials/story.html',
        })
        .when('/party', {
            templateUrl : 'dist/partials/party.html',
        })
        .when('/welcome', {
            templateUrl : 'dist/partials/welcome.html',
        })
        .when('/wedding', {
            templateUrl : 'dist/partials/wedding.html',
        })
        .when('/dingle', {
            templateUrl : 'dist/partials/dingle.html',
        })
        .when('/coast', {
            templateUrl : 'dist/partials/coast.html',
        })
        .when('/accommodations', {
            templateUrl : 'dist/partials/accommodations.html',
        })
        .when('/ireland', {
            templateUrl : 'dist/partials/ireland.html',
        })
        .otherwise({redirectTo: '/'})
    ;
}

Routes.$inject = DEPENDENCIES;
angular.module('wedding').config(Routes);

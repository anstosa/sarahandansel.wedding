'use strict';

var DEPENDENCIES = ['$window'];

function resizeWatcher($window) {
    return {
        restrict: 'A',
        link: function(scope) {
            scope.isWide = false;
            $($window).on('resize', widthCheck);
            widthCheck();

            function widthCheck() {
                var windowWidth = $($window).width();
                scope.isWide = (windowWidth > 675);
                if (!scope.$$phase) {
                    scope.$apply();
                }
            }
        }
    };
}

resizeWatcher.$inject = DEPENDENCIES;

angular.module('wedding').directive('resizeWatcher', resizeWatcher);

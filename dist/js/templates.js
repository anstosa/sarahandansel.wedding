angular.module('wedding').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('dist/partials/about.html',
    "<span>about</span>"
  );


  $templateCache.put('dist/partials/accomodations.html',
    "<span>accomodations</span>"
  );


  $templateCache.put('dist/partials/party.html',
    "<span>party</span>"
  );


  $templateCache.put('dist/partials/story.html',
    "<span>story</span>"
  );


  $templateCache.put('dist/partials/tips.html',
    "<span>tips</span>"
  );


  $templateCache.put('dist/partials/wedding.html',
    "<span>wedding</span>"
  );


  $templateCache.put('dist/partials/welcome.html',
    "<span>welcome</span>"
  );

}]);

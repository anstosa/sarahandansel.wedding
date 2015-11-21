angular.module('wedding').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('dist/partials/about.html',
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius, dui non pharetra fermentum, urna metus placerat ligula, sed lacinia quam eros vitae neque. Vestibulum id nunc laoreet, porta ante ut, fringilla dui. Cras aliquam ullamcorper odio, quis pulvinar arcu tristique eget. Phasellus varius consectetur nulla, vitae molestie sapien mattis eget. Phasellus non efficitur mauris. Quisque vel risus vel sem placerat aliquet. In luctus interdum lectus condimentum consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare ipsum tortor, quis accumsan augue vehicula at. Praesent eget facilisis dui. Aenean eget sapien a magna semper dignissim. Curabitur dignissim odio vitae odio tincidunt ullamcorper. Vivamus faucibus leo magna, eget porta nulla pretium id. Vivamus et feugiat leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin dignissim tempor mauris ut feugiat.</p>"
  );


  $templateCache.put('dist/partials/accomodations.html',
    "<span>accomodations</span>"
  );


  $templateCache.put('dist/partials/background.html',
    "<div class=\"c-background\"></div>"
  );


  $templateCache.put('dist/partials/card.html',
    "<div class=\"c-card\"><div class=\"c-card__front\"></div><div ng-view=\"ng-view\" class=\"c-card__back\"></div></div>"
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

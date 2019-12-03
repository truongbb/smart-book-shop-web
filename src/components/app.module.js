(function () {
  angular.module('smart_shop', [
    'ui.router',
    'ngResource',
    'ngStorage'
  ])
    .constant('API_SERVICE_URL', "http://localhost:9870/smart_shop");
})();

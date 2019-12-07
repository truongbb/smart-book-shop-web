(function () {
  angular.module('smart_shop', [
    'ui.router',
    'ngResource',
    'ngStorage'
  ])
    .constant('API_SERVICE_URL', "http://localhost:9870/smart_shop")
    .constant('ERROR_CODES', [400, 401, 403, 404, 500]);
})();

(function () {
  'use strict';

  angular.module('smart_shop').factory('RegisterService', RegisterService);

  RegisterService.$inject = ['$resource', 'API_SERVICE_URL'];

  function RegisterService($resource, API_SERVICE_URL) {
    var resourceUrl = API_SERVICE_URL + '/account';
    return $resource(resourceUrl, {}, {
      'login': {
        method: 'POST',
        url: resourceUrl + '/register'
      }
    });
  }
})();

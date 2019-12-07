(function () {
  'use strict';

  angular.module('smart_shop').factory('ForgotPasswordService', ForgotPasswordService);

  ForgotPasswordService.$inject = ['$resource', 'API_SERVICE_URL'];

  function ForgotPasswordService($resource, API_SERVICE_URL) {
    var resourceUrl = API_SERVICE_URL + '/authenticate';
    return $resource(resourceUrl, {}, {
      'login': {
        method: 'POST',
        url: resourceUrl + '/forgot_pass'
      }
    });
  }
})();

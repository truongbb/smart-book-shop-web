(function () {
  'use strict';

  angular.module('smart_shop').factory('LoginService', LoginService);

  LoginService.$inject = ['$resource', 'API_SERVICE_URL'];

  function LoginService($resource, API_SERVICE_URL) {
    var resourceUrl = API_SERVICE_URL + '/authenticate';
    return $resource(resourceUrl, {}, {
      'login': {
        method: 'POST',
        url: resourceUrl + '/authenticate'
      }
      // 'add': {
      // 	method: 'POST',
      // 	url: resourceUrl + '/add',
      // 	transformRequest: function (data) {
      // 		return angular.toJson(data);
      // 	}
      // },
      // 'delete': {
      // 	method: 'POST',
      // 	url: resourceUrl + '/delete',
      // 	transformRequest: function (data) {
      // 		return angular.toJson(data);
      // 	}
      // }
    });
  }
})();

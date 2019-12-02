(function () {
  'use strict';

  angular.module('smart_shop').factory('LoginService', LoginService);

  LoginService.$inject = ['$resource'];

  function LoginService($resource) {
    var resourceUrl = 'http://localhost:9870/smart_shop' + '/authenticate';
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

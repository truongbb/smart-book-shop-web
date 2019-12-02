(function () {
  'use strict';
  // EDIT THIS FILE TO SETUP PROJECT
  angular
      .module('smart_shop')
      .constant('VERSION', "1.0")
      .constant('DEBUG_INFO_ENABLED', true)
      .constant('BUILD_TIMESTAMP', "")
      .constant('API_SERVICE_PREFIX', "api,management")
      //.constant('API_SERVICE_URL', "https://vsmart-api.herokuapp.com")
      .constant('API_SERVICE_URL', "http://localhost:9870/smart_shop/")
      // .constant('ROOT_API_SERVICE_URL', "http://localhost:9090/api/")
      // .constant('MIME_TYPE_XLSX','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
      // .constant('API_SERVICE_URL', "http://10.0.0.126:8086/restful/api/bikt/")
      // .constant('ROOT_API_SERVICE_URL', "http://10.0.0.126:8086/restful/api/")
})();

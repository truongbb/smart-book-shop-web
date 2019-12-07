(function () {
  'use strict';
  angular.module('smart_shop').config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {
      $stateProvider.state('404', {
          url: '404',
          parent: 'smart_shop',
          views: {
              'content@': {
                  templateUrl: '../components/errors/404/404.html'
                  // controller: 'LoginController',
                  // controllerAs: 'vm'
              }
          },
          resolve: {
              // lazy load, i18n
          }
      });
  }
})();

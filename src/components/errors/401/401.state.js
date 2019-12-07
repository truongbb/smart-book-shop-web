(function () {
  'use strict';
  angular.module('smart_shop').config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {
      $stateProvider.state('401', {
          url: '401',
          parent: 'smart_shop',
          views: {
              'content@': {
                  templateUrl: '../components/errors/401/401.html'
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

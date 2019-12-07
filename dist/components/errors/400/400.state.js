(function () {
  'use strict';
  angular.module('smart_shop').config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {
      $stateProvider.state('400', {
          url: '400',
          parent: 'smart_shop',
          views: {
              'content@': {
                  templateUrl: '../components/errors/400/400.html'
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

(function () {
  'use strict';
  angular.module('smart_shop').config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {
      $stateProvider.state('500', {
          url: '500',
          parent: 'smart_shop',
          views: {
              'content@': {
                  templateUrl: '../components/errors/500/500.html'
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

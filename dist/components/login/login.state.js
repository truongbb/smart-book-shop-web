(function () {
    'use strict';
    angular.module('smart_shop').config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('login', {
            parent: 'smart_shop',
            url: 'login',
            data: {},
            views: {
                'content@': {
                    templateUrl: '../components/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                // lazy load, i18n
            }
        });
    }
})();

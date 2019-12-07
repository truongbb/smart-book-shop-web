(function () {
    'use strict';
    angular.module('smart_shop').config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('register', {
            parent: 'smart_shop',
            url: 'register',
            data: {},
            views: {
                'content@': {
                    templateUrl: '../components/register/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                // lazy load, i18n
            }
        });
    }
})();

(function () {
    'use strict';
    angular.module('smart_shop').config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('forgot_pass', {
            parent: 'smart_shop',
            url: 'forgot_pass',
            data: {},
            views: {
                'content@': {
                    templateUrl: '../components/forgot_password/forgotpass.html',
                    controller: 'ForgotPasswordController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                // lazy load, i18n
            }
        });
    }
})();

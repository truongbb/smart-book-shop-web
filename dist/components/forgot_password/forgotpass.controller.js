(function () {
  'use strict';

  angular.module('smart_shop').controller('ForgotPasswordController', ForgotPasswordController);

  ForgotPasswordController.$inject = ['$scope', 'ForgotPasswordService', '$localStorage', '$state', 'ERROR_CODES'];

  function ForgotPasswordController($scope, ForgotPasswordService, $localStorage, $state, ERROR_CODES) {
    var vm = this;
    (function init() {
      // <editor-fold desc="FUNCTIONS">
      vm.resetPassword = resetPassword;
      // </editor-fold>

      // <editor-fold desc="VARIABLES">
      vm.user = {};
      vm.resetSuccess = false;
      // </editor-fold>

    })();

    function resetPassword() {
      ForgotPasswordService.resetPassword(vm.user, function (response) {
        vm.resetSuccess = response;
      }, function (err) {
        console.log(err);
        if (ERROR_CODES.includes(err.status)) {
          $state.go(err.status.toString());
        }
      });
    }
  }

})();

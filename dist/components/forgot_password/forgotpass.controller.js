(function () {
  'use strict';

  angular.module('smart_shop').controller('ForgotPasswordController', ForgotPasswordController);

  ForgotPasswordController.$inject = ['$scope', 'ForgotPasswordService', '$localStorage', '$state'];

  function ForgotPasswordController($scope, ForgotPasswordService, $localStorage, $state) {
    var vm = this;
    (function init() {
      // <editor-fold desc="FUNCTIONS">
      vm.forgotPassword = forgotPassword;
      // </editor-fold>

      // <editor-fold desc="VARIABLES">
      vm.user = {};
      // </editor-fold>

    })();

    function forgotPassword() {
      ForgotPasswordService.forgotPassword(vm.user, function (response) {
      }, function (err) {
        console.log(err);
        if (err.status == 401) {
          $state.go("401");
        } else if (err.status == 500) {
          $state.go("500");
        } else {
          alert("Some unkonwn errors, try again later!");
        }
      });
    }
  }

})();

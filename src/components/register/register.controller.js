(function () {
  'use strict';

  angular.module('smart_shop').controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope', 'RegisterService', '$localStorage', '$state'];

  function RegisterController($scope, RegisterService, $localStorage, $state) {
    var vm = this;
    (function init() {
      // <editor-fold desc="FUNCTIONS">
      vm.register = register;
      // </editor-fold>

      // <editor-fold desc="VARIABLES">
      vm.user = {};
      // </editor-fold>

    })();

    function register() {
      RegisterService.register(vm.user, function (response) {
        $localStorage.user = response.user;
        $localStorage.token = response.token;
        $state.go("home");
      }, function (err) {
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

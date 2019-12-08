(function () {
  'use strict';

  angular.module('smart_shop').controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'LoginService', '$localStorage', '$state', 'ERROR_CODES'];

  function LoginController($scope, LoginService, $localStorage, $state, ERROR_CODES) {
    var vm = this;
    (function init() {
      // <editor-fold desc="FUNCTIONS">
      vm.login = login;
      // </editor-fold>

      // <editor-fold desc="VARIABLES">
      vm.user = {};
      vm.unauthen = false;
      // </editor-fold>

    })();

    function login() {
      LoginService.login(vm.user, function (response) {
        $localStorage.user = response.user;
        $localStorage.token = response.token;
        $state.go("smart_shop");
      }, function (err) {
        console.log(err);
        if (err.status == 401) {
          vm.unauthen = true;
        } else if (ERROR_CODES.includes(err.status)) {
          $state.go(err.status.toString());
        } else {
          alert("Some unkonwn errors, try again later!");
        }
      });
    }
  }

})();

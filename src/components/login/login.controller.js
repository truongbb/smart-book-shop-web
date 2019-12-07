(function () {
  'use strict';

  angular.module('smart_shop').controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'LoginService', '$localStorage', '$state'];

  function LoginController($scope, LoginService, $localStorage, $state) {
    var vm = this;
    (function init() {
      // <editor-fold desc="FUNCTIONS">
      vm.login = login;
      // </editor-fold>

      // <editor-fold desc="VARIABLES">
      vm.user = {};
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

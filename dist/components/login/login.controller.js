(function () {
  'use strict';

  angular.module('smart_shop').controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'LoginService', '$localStorage', '$state'];

  function LoginController($scope, LoginService, $localStorage, $state) {
    var vm = this;
    (function init() {
      // <editor-fold desc="FUNCTIONS">
      vm.login = login;
      // vm.deleteStudent = deleteStudent;
      // </editor-fold>

      // <editor-fold desc="VARIABLES">
      vm.user = {};
      // vm.studentList = [];
      // </editor-fold>

      // search();
    })();

    function login() {

      LoginService.login(vm.user, function (response) {
        $localStorage.user = response.user;
        $localStorage.token = response.token;
        $state.go("smart_shop");
      }, function (err) {
        console.log(err);
        if (err.status == 401) {
          alert("Invalid username/password");
        } else if (err.status == 500) {
          alert("Server is interupted, try again later!");
        } else {
          alert("Some unkonwn errors, try again later!");
        }
      });
    }

    // function search() {
    //     StudentService.searchStudent(vm.studentSearch, function (data) {
    //         vm.studentList = data;
    //     }, function (error) {
    //         console.error(error);
    //     });
    // }
    //
    // function deleteStudent(idStudent) {
    //     if (confirm("Do you want delete this student?")) {
    //         StudentService.delete({id: idStudent}, function (response) {
    //             response.resultStatus === "OK" ? alert("Delete successfully") : alert("Delete failure!!!");
    //             search();
    //         }, function (error) {
    // 	alert("Delete failure!!!");
    //             console.error(error);
    //         });
    //     }
    // }

  }
})();

(function () {
  'use strict';

  angular.module('smart_shop').controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'LoginService', '$localStorage'];

  function LoginController($scope, LoginService, $localStorage) {
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
      }, function (err) {
        console.log(err);
        if (err.status == 401) {
          alert();
        } else if (err.status == 500) {
          alert();
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

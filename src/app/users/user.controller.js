angular.module('ang2.users')
  .controller('UserEditController', function (details) {

    var vm = this;
    vm.details = details;
    vm.editUser = function() {
       return vm.details;
    }
  });

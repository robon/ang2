angular.module('ang2.users')
  .service('userService', function () {

    var vm = this;
    vm.listUsers = [
      { id: 1,
        name: 'Adam Nowacki',
        descr: 'Opis dla user-1',
        isActive: true,
        isEdit: true
      },
      {
        id: 2,
        name: 'Olga Kowal',
        descr: 'Opis dla user-2',
        isActive: false,
        isEdit: true
      },
      {
        id: 3,
        name: 'Lena Sicicka',
        descr: 'Opis dla user-3',
        isActive: true,
        isEdit: false
      }
    ];

    return {
      get: function(id) {
        return vm.listUsers[id-1];
      }
    }

  });

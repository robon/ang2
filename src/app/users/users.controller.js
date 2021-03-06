angular.module('ang2.users')
  .controller('UsersController', function ($state) {

    var vm = this;
    vm.add = false;
    vm.listUsers = [
      { id: 1,
        name: 'Adam Nowacki',
        descr: 'Opis dla user-1',
        isActive: true,
      },
      {
        id: 2,
        name: 'Olga Kowal',
        descr: 'Opis dla user-2',
        isActive: false,
      },
      {
        id: 3,
        name: 'Lena Sicicka',
        descr: 'Opis dla user-3',
        isActive: true,
      }
    ];

    vm.seq = vm.listUsers.length+1;
    vm.newUser = {id : vm.seq};


    vm.get = function(user){
      return vm.listUsers[user.id];
    };

    vm.setEdit = function(user){
      vm.edited = angular.copy(user);
console.log(vm.edited);
    };

      vm.setDelete = function(user){

          angular.forEach(vm.listUsers, function(u, i) {
              if (u.id === user.id ) {
                  vm.listUsers.splice(i, 1);

              }
          });
      };

    vm.save = function(user){
      vm.addUser = angular.copy(user);
      vm.listUsers.push(vm.addUser);
      var lp = vm.listUsers.length+1;
      vm.newUser = null;
      vm.newUser = {id : lp};

      // $state.reload();
    };

    vm.edit = function(user){
       angular.forEach(vm.listUsers, function(u, i) {
            if (u.id === user.id ) {
                vm.listUsers[i] = user;
            }
        });
    };



  });


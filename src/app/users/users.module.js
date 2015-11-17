angular.module('ang2.users', [
    'ui.router'
  ])
  .config(function ($stateProvider) {

    $stateProvider.state('users', {
      url: '/users',
      templateUrl: 'app/users/users.html',
      controller: 'UsersController',
      controllerAs: 'users'
    });

    $stateProvider.state('edit', {
      url: '/users/{id}/edit',
      templateUrl: 'app/users/edit.html',
      controller: 'UserEditController',
      controllerAs: 'user',
      resolve: {
        details: function(userService, $stateParams) {
          return userService.get($stateParams.id);
        }
      }

    })


  });

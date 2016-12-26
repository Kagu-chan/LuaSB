app
  .component('navigation', {
    bindings: {
      test: '@',
    },
    templateUrl: (AppService) => AppService.templateUrl('test'),
    controller: 'NavigationController as $nav',
  });

app
  .component('navigation', {
    bindings: {
      items: '=',
    },
    templateUrl: (AppService) => AppService.templateUrl('test'),
    controller: 'NavigationController as $nav',
  });

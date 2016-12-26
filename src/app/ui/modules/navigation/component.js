app
  .component('navigation', {
    bindings: {
      items: '=',
    },
    templateUrl: (AppService) => AppService.templateUrl('navigation', 'main'),
    controller: 'NavigationController as $nav',
  });

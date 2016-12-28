app
  .directive('navigation', (AppService, $timeout, $window) => { // eslint-disable-line arrow-body-style, max-len
    return {
      restrict: 'E',
      link: (scope, element, attrs, controller) => {
        $timeout(() => controller.fixHeight(element, false));
        angular.element($window).bind('resize', () => {
          $timeout(() => controller.fixHeight(element, true));
        });
      },
      templateUrl: () => AppService.templateUrl('navigation', 'main'),
      controller: 'NavigationController',
    };
  });

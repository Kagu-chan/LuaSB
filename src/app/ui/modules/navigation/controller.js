app
  .controller('NavigationController', ($scope, $timeout, ProjectsService, _) => {
    const lib = {
      lastHeight: null,
      fixHeight(element, isResize) {
        let accordionHeight;
        let panelGroupHeight;
        let heightDiff;
        let height;
        let watcher;

        const accordion = element.find('uib-accordion');
        const panelGroup = accordion.children();
        const groups = panelGroup.children();

        let itemToFix;
        _.each(groups, (group) => {
          const item = angular.element(group);
          const panel = angular.element(item.children()[1]);

          if (panel.attr('aria-hidden') === 'true') {
            panel.css('height', '');
          } else {
            itemToFix = panel;
          }
        });

        if (typeof itemToFix === 'undefined') {
          itemToFix = angular.element(angular.element(groups[0]).children()[1]);
        }

        if (isResize || !lib.lastHeight) {
          accordionHeight = accordion[0].offsetHeight;
          panelGroupHeight = panelGroup[0].offsetHeight;
          heightDiff = accordionHeight - panelGroupHeight - 5;
          height = itemToFix[0].offsetHeight + heightDiff;
        } else {
          height = lib.lastHeight;
        }
        lib.lastHeight = height;

        watcher = $scope.$watch(() => itemToFix.attr('class'), () => { // eslint-disable-line prefer-const, max-len
          if (!itemToFix.hasClass('collapsing')) {
            itemToFix.css('height', `${height}px`);
            watcher();
          }
        });
      },
    };

    $scope.items = [
      { label: 'navigation.projects', order: 1, subitems: ProjectsService.getProjects() },
      { label: 'navigation.presets', order: 2, subitems: ProjectsService.getPresets() },
      { label: 'navigation.snippets', order: 3, subitems: ProjectsService.getSnippets() },
      { label: 'navigation.modules', order: 4, subitems: ProjectsService.getModules() },
      { label: 'navigation.plugins', order: 5, subitems: ProjectsService.getPlugins() },
    ];

    _.each($scope.items, (item, index) => {
      let isOpened = index === 0;
      Object.defineProperty(item, 'IsOpened', {
        get() {
          return isOpened;
        },
        set(newValue) {
          isOpened = newValue;
          if (isOpened) {
            $timeout(() => lib.fixHeight(angular.element(document).find('x-navigation')));
          }
        },
      });
    });

    return lib;
  });

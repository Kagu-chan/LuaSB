app
  .controller('NavigationController', ($scope, ProjectsService) => {
    $scope.items = [
      { label: 'navigation.projects', order: 1, subitems: ProjectsService.getProjects() },
      { label: 'navigation.presets', order: 2, subitems: ProjectsService.getPresets() },
      { label: 'navigation.snippets', order: 3, subitems: ProjectsService.getSnippets() },
      { label: 'navigation.modules', order: 4, subitems: ProjectsService.getModules() },
      { label: 'navigation.plugins', order: 5, subitems: ProjectsService.getPlugins() },
    ];
  });

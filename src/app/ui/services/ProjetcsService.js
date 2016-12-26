app
  .service('ProjectsService', function ProjectsService(ExchangeService) { // eslint-disable-line no-unused-vars, max-len
    this.getProjects = () => { // eslint-disable-line arrow-body-style
      return [
        { id: 'project-1', title: 'Projekt-1', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-2', title: 'Projekt-2', lastUsed: new Date('12 03, 2016 06:07:38') },
        { id: 'project-3', title: 'Projekt-3', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-4', title: 'Projekt-4', lastUsed: new Date('12 03, 2016 06:07:38') },
        { id: 'project-5', title: 'Projekt-5', lastUsed: new Date('12 03, 2016 06:07:38') },
        { id: 'project-6', title: 'Projekt-6', lastUsed: new Date('12 03, 2016 06:07:38') },
        { id: 'project-7', title: 'Projekt-7', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-8', title: 'Projekt-8', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-9', title: 'Projekt-9', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-10', title: 'Projekt-10', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-11', title: 'Projekt-11', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-12', title: 'Projekt-12', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-13', title: 'Projekt-13', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-14', title: 'Projekt-14', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-15', title: 'Projekt-15', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-16', title: 'Projekt-16', lastUsed: new Date('12 04, 2016 06:07:38') },
        { id: 'project-17', title: 'Projekt-17', lastUsed: new Date('12 04, 2016 06:07:38') },
      ];
    };
    this.getPresets = this.getProjects;
    this.getSnippets = this.getProjects;
    this.getModules = this.getProjects;
    this.getPlugins = this.getProjects;
  });

app
  .service('AppService', function AppService() {
    this.templateUrl = (component) => `templates/${component}.html`;
  });

app
  .service('AppService', function AppService() {
    this.templateUrl = (component, template) => `templates/${component}/${template}.html`;
  });

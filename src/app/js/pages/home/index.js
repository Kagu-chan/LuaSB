// const greeting = i18n.__('hello');
const node_version = process.versions.node;
const electron_version = process.versions.electron;
const chromium_version = process.versions.chrome;

module.exports = {
  template: 'main',
  data: {
    // greeting,
    node_version,
    electron_version,
    chromium_version
  }
};

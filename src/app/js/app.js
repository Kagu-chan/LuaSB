require('app-module-path').addPath(__dirname);

const Main = require('modules/main');

Main.configure();
Main.run();

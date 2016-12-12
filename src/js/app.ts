/// <reference path="_def/node.d.ts" />
/// <reference path="_def/electron.d.ts" />
/// <reference path="_def/jquery.d.ts" />

require('app-module-path').addPath(__dirname);

import LuaSB from './modules/main';

LuaSB.run();
"use strict";
var Globals = (function () {
    function Globals() {
    }
    return Globals;
}());
Globals.base = __dirname + "/..";
Globals.directorySeperator = "/";
Globals.viewPath = Globals.base + "/view";
Globals.startModule = Globals.viewPath + "/main.html";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Globals;

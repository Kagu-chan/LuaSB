"use strict";
var electron_1 = require("../electron");
var LuaSB = (function () {
    function LuaSB() {
    }
    return LuaSB;
}());
LuaSB.run = function () { return electron_1.default.registerAppEvents(); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LuaSB;

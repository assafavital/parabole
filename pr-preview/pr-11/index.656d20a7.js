!function(e,t,o,n,r){var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof l[n]&&l[n],a=u.cache||{},i="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,o){if(!a[t]){if(!e[t]){var r="function"==typeof l[n]&&l[n];if(!o&&r)return r(t,!0);if(u)return u(t,!0);if(i&&"string"==typeof t)return i(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}c.resolve=function(o){var n=e[t][1][o];return null!=n?n:o},c.cache={};var d=a[t]=new f.Module(t);e[t][0].call(d.exports,c,d,d.exports,this)}return a[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=a,f.parent=u,f.register=function(t,o){e[t]=[function(e,t){t.exports=o},{}]},Object.defineProperty(f,"root",{get:function(){return l[n]}}),l[n]=f;for(var s=0;s<t.length;s++)f(t[s]);if(o){var d=f(o);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}}({hmesX:[function(e,t,o){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(o),n.export(o,"saveState",()=>l),n.export(o,"loadState",()=>u),n.export(o,"todaySolved",()=>a);class r{constructor(e){this.lastSolved=e.lastSolved,this.streak=e.streak,this.totalPlayed=e.totalPlayed,this.totalSolved=e.totalSolved}}function l(e){localStorage.setItem("state",JSON.stringify(e))}function u(){let e=localStorage.getItem("state");return e?JSON.parse(e):new r({lastSolved:null,streak:0,totalPlayed:0,totalSolved:0})}function a(e){if(null==e.lastSolved)return!1;let t=new Date,o=new Date(e.lastSolved);return t.getFullYear()===o.getFullYear()&&t.getMonth()===o.getMonth()&&t.getDate()===o.getDate()}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,t,o){o.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},o.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.exportAll=function(e,t){return Object.keys(e).forEach(function(o){"default"===o||"__esModule"===o||Object.prototype.hasOwnProperty.call(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[o]}})}),t},o.export=function(e,t,o){Object.defineProperty(e,t,{enumerable:!0,get:o})}},{}]},["hmesX"],"hmesX","parcelRequire813d");
//# sourceMappingURL=index.656d20a7.js.map

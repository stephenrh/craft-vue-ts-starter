(function(e){function n(n){for(var r,i,u=n[0],l=n[1],s=n[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(n);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="http://localhost:8080/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var c=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"45e4":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("a026"),o=(t("28a5"),t("a481"),t("ac6a"),t("8103")),a=t.n(o),i=t("bba4"),u=t.n(i),l=t("6809");l.keys().forEach(function(e){var n=l(e),t=a()(u()(e.split("/").pop().replace(/\.\w+$/,"")));r["a"].component(t,n.default||n)});t("a589");r["a"].config.productionTip=!1,new r["a"]({el:"#app",delimiters:["${","}"]})},6809:function(e,n,t){var r={"./HelloWorld.vue":"fdab"};function o(e){var n=a(e);return t(n)}function a(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="6809"},"89fe":function(e,n,t){"use strict";var r=t("45e4"),o=t.n(r);o.a},a589:function(e,n,t){},fdab:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("img",{attrs:{src:"/assets/logo.png"}}),t("h1",[e._v(e._s(e.msg))]),e._m(0),t("p",[e._v("Passing in some data from twig:")]),t("code",[e._v("\n    Craft Version: "+e._s(e.info)+" (passed in as prop)"),t("br"),e._v("\n    Environment: "+e._s(e.info.environment)+" (passed in as prop)"),t("br"),e._v("\n    DB Name: "),e._t("default"),e._v(" (passed in through slot)\n  ")],2)])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("You're viewing the "),t("code",[e._v("<HelloWorld>")]),e._v(" component! and u suck!!!!! :) Hey")])}],a={name:"HelloWorld",props:["info"],data:function(){return{msg:"Hello World"}}},i=a,u=(t("89fe"),t("2877")),l=Object(u["a"])(i,r,o,!1,null,"9583e820",null);n["default"]=l.exports}});
//# sourceMappingURL=app.ddcd8a44.js.map
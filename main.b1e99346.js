parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("click",function(t){var e=t.target.closest(".wall");if(e){var n=document.querySelector(".spider"),i=parseInt(window.getComputedStyle(e).getPropertyValue("border-width")),c=t.clientX-e.offsetLeft,o=t.clientY-e.offsetTop,l=function(t){var c="x"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y"),o=n.clientWidth,l=n.clientHeight,r=(c?o:l)/2,d=e.clientWidth,a=e.clientHeight,s=r+i;return t>=(c?d-s:a-s)?c?d-l:a-l:t<=s?0:t-r-i};n.style="\n    top: ".concat(l(o),"px; left: ").concat(l(c,"x"),"px;\n  ")}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b1e99346.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return n(e)||i(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function n(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}var d=document.querySelectorAll(".field_row"),u=document.querySelector(".message_win"),f=document.querySelector(".message_lose"),c=document.querySelector(".start"),h=document.querySelector(".message_start"),v=document.querySelector(".game_score"),m=4;document.addEventListener("keydown",function(e){switch(e.key){case"ArrowUp":p.slideUp();break;case"ArrowLeft":p.slideLeft();break;case"ArrowDown":p.slideDown();break;case"ArrowRight":p.slideRight()}}),c.addEventListener("click",function(){c.classList.replace("start","restart"),c.textContent="Restart",h.classList.add("hidden"),u.classList.add("hidden"),f.classList.add("hidden"),p.startGame()});var y=function(){function t(){s(this,t)}return l(t,[{key:"startGame",value:function(){this.field=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.score=0,this.addNumber(),this.addNumber(),this.updateGrid()}},{key:"addNumber",value:function(){for(var e=[],t=0;t<m;t++)for(var r=0;r<m;r++)0===this.field[t][r]&&e.push([t,r]);var i=e[Math.floor(Math.random()*e.length)],n=Math.random()<.9?2:4,a=i[0],s=i[1];this.field[a][s]=n}},{key:"updateGrid",value:function(){for(var e=0;e<m;e++)for(var t=0;t<m;t++){var r=d[e].children[t],i=this.field[e][t];0===i?(r.className="field_cell",r.textContent=""):(r.className="field_cell field_cell--".concat(i),r.textContent=i)}}},{key:"messageWin",value:function(){for(var e=0;e<m;e++)for(var t=0;t<m;t++)2048===this.field[e][t]&&u.classList.remove("hidden")}},{key:"gameOver",value:function(){for(var t=e(this.field),r=0;r<m;r++)for(var i=0;i<m;i++){if(0===t[r][i])return!1;if(r!==m-1&&t[r][i]===t[r+1][i])return!1;if(i!==m-1&&t[r][i]===t[r][i+1])return!1}return!0}},{key:"messageLose",value:function(){this.gameOver()&&f.classList.remove("hidden")}},{key:"operate",value:function(t){var r=e(t);return r=this.slide(r),r=this.combine(r),r=this.slide(r)}},{key:"slide",value:function(e){var t=e.filter(function(e){return e}),r=m-t.length,i=Array(r).fill(0);return t=t.concat(i)}},{key:"combine",value:function(e){for(var t=0;t<=m-1;t++){var r=e[t],i=e[t+1];r===i&&(e[t]=r+i,e[t+1]=0,this.score+=e[t])}return v.textContent=this.score,e}},{key:"flipField",value:function(){for(var e=[],t=0;t<m;t++){for(var r=[],i=m-1;i>=0;i--)r.push(this.field[t][i]);e.push(r)}this.field=e}},{key:"rotateField",value:function(){for(var e=[],t=0;t<m;t++){for(var r=[],i=0;i<m;i++)r.push(this.field[m-1-i][t]);e.push(r)}this.field=e}},{key:"slideLeft",value:function(){for(var t=!1,r=0;r<m;r++){for(var i=e(this.field[r]),n=this.operate(this.field[r]),a=0;a<m;a++)if(i[a]!==n[a]){t=!0;break}this.field[r]=n}t&&(this.addNumber(),this.updateGrid(),this.messageWin(),this.messageLose())}},{key:"slideRight",value:function(){this.flipField(),this.slideLeft(),this.flipField(),this.updateGrid()}},{key:"slideDown",value:function(){this.rotateField(),this.slideLeft(),this.rotateField(),this.rotateField(),this.rotateField(),this.updateGrid()}},{key:"slideUp",value:function(){this.rotateField(),this.rotateField(),this.rotateField(),this.slideLeft(),this.rotateField(),this.updateGrid()}}]),t}(),p=new y;
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.700cb43a.js.map
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);console.log("app running")},function(e,t,n){"use strict";e.exports=function(){var e=document.getElementById("primary_nav_icon"),t=document.getElementById("primary_nav");(window.innerWidth||document.documentElement.clientWidth)>640&&!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&(e.classList.add("desktop"),t.classList.add("desktop"));var n=document.querySelectorAll("[data-menu]");Object.keys(n).forEach(function(e){var t=n[e],o=t.getAttribute("data-menu");t.addEventListener("click",function(e){event.preventDefault();var t=document.querySelector("#"+o),n=event.target;t&&function(e,t){if("primary_nav"===e.id){var n=document.getElementById("primary_nav_icon");n.classList.contains("closed")?(n.classList.remove("closed"),n.classList.add("open")):(n.classList.add("closed"),n.classList.remove("open"))}if("open"===e.getAttribute("data-menu_state"))return e.setAttribute("data-menu_state","closed"),e.classList.remove("open"),void t.classList.remove("open");e.setAttribute("data-menu_state","open"),e.classList.add("open"),t.classList.add("open")}(t,n)})})}()},function(e,t){e.exports=void document.querySelectorAll("[data-modal]").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();const n=document.getElementById(e.dataset.modal);n.classList.add("open"),document.body.style.position="fixed",document.body.style.top=`-${window.scrollY}px`,n.querySelectorAll(".modal-exit").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),n.classList.remove("open");const t=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(t||"0"))})})})})}]);
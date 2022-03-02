// ==UserScript==
// @name         computerbase
// @author       Moss
// @description  computerbase
// @version      0.1
// @include      https://www.computerbase.de/*
// ==/UserScript==

(function () {
  'use strict';

  Array.from(document.querySelectorAll(".adbox")).forEach(x => x.remove());
  Array.from(document.querySelectorAll(".adblock-plea")).forEach(x => x.remove());
  Array.from(document.querySelectorAll(".sharelinks")).forEach(x => x.remove());
})();

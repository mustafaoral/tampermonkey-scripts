// ==UserScript==
// @name         JSON Formatter
// @author       Moss
// @description  JSON Formatter
// @version      0.1
// @include      https://jsonformatter.org/*
// ==/UserScript==

(function () {
  "use strict";

  Array.from(document.querySelectorAll("ins")).forEach(x => x.remove());
  Array.from(document.querySelectorAll(".ads")).forEach(x => x.remove());
})();

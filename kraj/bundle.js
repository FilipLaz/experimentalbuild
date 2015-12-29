(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _automobili = require("./automobili");

var _automobili2 = _interopRequireDefault(_automobili);

var _rendanje = require("./rendanje");

var _rendanje2 = _interopRequireDefault(_rendanje);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_automobili2.default.dajSveAsveee().then(_rendanje2.default.rendajSvaKola).catch(function (error) {
    console.log(error);
});

},{"./automobili":2,"./rendanje":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Automobili = {
    dajSveAsveee: function dajSveAsveee() {
        return new Promise(function (resolve, reject) {
            var url = "http://localhost:3000/rezultati";
            var request = new XMLHttpRequest();

            //treci parametar je async(non blocking)
            request.open("get", url, true);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    resolve(JSON.parse(request.response));
                }
            };

            request.onerror = function () {
                reject(new Error("nesto puklo"));
            };

            request.send();
        });
    }
};

exports.default = Automobili;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Rendanje = {
    rendajSvaKola: function rendajSvaKola(ulaz) {
        var generisaniHtml = ulaz.map(function (kola) {
            var Marka = kola.Marka;
            var Konja = kola.Konja;
            var Godiste = kola.Godiste;

            return templejtKola(Marka, Konja, Godiste);
        });

        var target = document.querySelector(".js-main");
        target.innerHTML = generisaniHtml.join("");
    }
};

var templejtKola = function templejtKola(Marka, Konja, Godiste) {
    //vazno je returnovati templejt string
    return "<div class=\"main__item\">\n        <div class=\"main__item__part\">\n            Godiste\n            <div>" + Godiste + "</div>\n        </div>\n        <div class=\"main__item__part\">\n            Marka:\n            <div>" + Marka + "</div>\n        </div>\n        <div class=\"main__item__part\">\n            Konja:\n            <div>" + Konja + "</div>\n        </div>\n    </div>";
};

exports.default = Rendanje;

},{}]},{},[1]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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

var Rendanje = {
    rendajSvaKola: function rendajSvaKola(ulaz) {
        console.log("izlazz-->", ulaz);
    }
};

Automobili.dajSveAsveee().then(Rendanje.rendajSvaKola).catch(function (error) {
    console.log(error);
});

},{}]},{},[1]);
